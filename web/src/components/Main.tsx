import React from "react";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { BootstrapDialogTitle } from "./BootstrapDialogTitle";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Counter({ children }: { children: JSX.Element }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            SAMI
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Smart Atmospheric Meteorological Instrument
          </Typography>
          <Grid
            container
            alignItems="center"
            direction="column"
            sx={{ gap: 2, marginTop: 2 }}
          >
            <Grid item>
              <Button onClick={handleClickOpen}>Pokaż harmonogram</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Harmonogram
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            SAM Instrument Harmonogram
            <br /> 1.
            <br /> 2.
            <br /> 3.
            <br /> 4.
            <br /> 5.
            <br /> 6.
            <br /> 7.
            <br /> 8.
            <br /> 9.
            <br /> 10.
            <br /> 11.
            <br /> 12.
            <br /> 13.
            <br />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Zamknij
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
