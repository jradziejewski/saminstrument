import { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import Users from "./Users";
import Measurements from "./Measurements";
import Probes from "./Probes";
import Sami from "../assets/sami.svg";
import GroupIcon from "@mui/icons-material/Group";
import StraightenIcon from "@mui/icons-material/Straighten";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import { AddUserForm } from "./AddUserForm";

const drawerWidth = 240;

const Tables = {
  Users: "Users",
  Measurements: "Measurements",
  Probes: "Probes",
};

export default function Main() {
  const [currentTable, setCurrentTable] = useState(Tables.Users);

  function handleClick(table) {
    setCurrentTable(table);
  }

  return (
    <Grid container sx={{ overflowX: "hidden" }}>
      <Grid item>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <Toolbar color="primary">
            <img src={Sami} width={30} height={30} />
            <Box sx={{ marginLeft: 2 }}>SAMI</Box>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <List>
            {listItems.map((entry) => (
              <ListItem key={entry.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleClick(entry.text);
                  }}
                >
                  <ListItemIcon selected>{entry.icon}</ListItemIcon>
                  <ListItemText primary={entry.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        sx={{ overflowX: "hidden" }}
        direction="column"
        ml={40}
        mt={10}
      >
        <Grid sx={{ color: (theme) => theme.palette.text.primary }} item>
          <h1>{currentTable}</h1>
        </Grid>
        <Divider sx={{ width: "75%" }} />

        <TableView tableType={currentTable} />
      </Grid>
    </Grid>
  );
}

const listItems = [
  { text: Tables.Users, icon: <GroupIcon /> },
  { text: Tables.Measurements, icon: <StraightenIcon /> },
  { text: Tables.Probes, icon: <DeviceThermostatIcon /> },
];

function TableView({ tableType }) {
  switch (tableType) {
    case Tables.Users:
      return (
        <Grid container item direction="row">
          <Grid item>
            <Users />
          </Grid>
          <Grid item mt={5}>
            <AddUserForm />
          </Grid>
        </Grid>
      );
    case Tables.Measurements:
      return (
        <Grid container item direction="row">
          <Grid item>
            <Measurements />
          </Grid>
        </Grid>
      );
    case Tables.Probes:
      return (
        <Grid container item direction="row">
          <Grid item>
            <Probes />
          </Grid>
        </Grid>
      );
  }
}

TableView.propTypes = {
  tableType: PropTypes.any,
};
