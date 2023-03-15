import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export default function Counter({ children }: { children: JSX.Element }) {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SAMI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Smart Atmospheric Meteorological Instrument
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
