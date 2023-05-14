import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

export default function Main() {
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
    <>
      <AppBar open={open}>
        <Toolbar color="primary">SAMI</Toolbar>
      </AppBar>
      <TableContainer
        sx={{ maxWidth: 500, marginLeft: 15, marginTop: 10 }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((entry) => {
              return (
                <TableRow
                  key={entry.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{entry.id}</TableCell>
                  <TableCell>{entry.username}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
