
import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import Users from "./Users";
import Sami from "../assets/sami.svg";
import GroupIcon from "@mui/icons-material/Group";
import StraightenIcon from "@mui/icons-material/Straighten";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const drawerWidth = 240;

export default function Main() {
  return (
    <Box sx={{ display: "flex" }}>
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
              <ListItemButton>
                <ListItemIcon>{entry.icon}</ListItemIcon>
                <ListItemText primary={entry.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Users />
    </Box>
  );
}

const listItems = [
  { text: "Users", icon: <GroupIcon /> },
  { text: "Measurements", icon: <StraightenIcon /> },
  { text: "Probes", icon: <DeviceThermostatIcon /> },
];
