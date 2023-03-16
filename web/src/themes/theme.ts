import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html body": {
          backgroundColor: "#34234",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#1e88e5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
