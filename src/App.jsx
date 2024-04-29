import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";
import { deepPurple, teal } from "@mui/material/colors";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  // let theme = createTheme({
  //   palette: {
  //     mode: "dark",
  //     primary: {
  //       main: "#dc143c",
  //     },
  //     secondary:{
  //       main:teal[700],
  //     },
  //     //secondary:teal,
  //     morcivert: {
  //       main:deepPurple["A200"],
  //       light:deepPurple["A100"],
  //       dark:deepPurple["A400"],
  //     }
  //   },
  // });
  return (
    // <ThemeProvider theme={theme}>
    <ThemeContextProvider>
      <CssBaseline />
      <Home />
    </ThemeContextProvider>
    // </ThemeProvider>
  );
}

export default App;
