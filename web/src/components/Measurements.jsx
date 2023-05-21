import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { TableHead, TableRow, TableCell, TableBody, Grid } from "@mui/material";

export default function Measurements() {
  const [data, setData] = useState([]);
  useEffect(() => {
    logJSONData();
  }, []);

  async function logJSONData() {
    const url = "https://czujnikwiatru.pythonanywhere.com/api/measurements";

    const response = await fetch(url, {
      method: "GET",
    });
    const responseJson = await response.json();
    setData(responseJson);
  }

  return (
    <Grid container item>
      <Grid mt={-10} item>
        <DataTable>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Probe ID</TableCell>
              <TableCell>Measurement timestamp</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Wind speed</TableCell>
              <TableCell>Wind direction</TableCell>
              <TableCell>Cloudiness</TableCell>
              <TableCell>External temperature</TableCell>
              <TableCell>Barometric pressure</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((entry) => {
              return (
                <TableRow key={entry.id}>
                  <TableCell>{entry.id}</TableCell>
                  <TableCell>{entry.probe_id}</TableCell>
                  <TableCell>{entry.measurement_timestamp}</TableCell>
                  <TableCell>{entry.location}</TableCell>
                  <TableCell>{entry.wind_speed}</TableCell>
                  <TableCell>{entry.wind_direction}</TableCell>
                  <TableCell>{entry.cloudiness}</TableCell>
                  <TableCell>{entry.external_temperature}</TableCell>
                  <TableCell>{entry.barometric_pressure}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </DataTable>
      </Grid>
    </Grid>
  );
}
