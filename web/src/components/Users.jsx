import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export default function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    logJSONData();
  }, []);

  async function logJSONData() {
    const url = "https://czujnikwiatru.pythonanywhere.com/api/users";

    const response = await fetch(url, {
      method: "GET",
    });
    const responseJson = await response.json();
    setData(responseJson);
  }

  return (
    <DataTable>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Username</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((entry) => {
          return (
            <TableRow key={entry.id}>
              <TableCell>{entry.id}</TableCell>
              <TableCell>{entry.username}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </DataTable>
  );
}
