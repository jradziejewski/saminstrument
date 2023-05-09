import Main from "./components/Main";
import { theme } from "./customTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { withTheme } from "@mui/styles";
import "./index.css";

const ThemedMain = withTheme(Main);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemedMain />
    </ThemeProvider>
  );
}

export default App;
