import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { store } from "./redux/store";

const darkModeTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1890FF",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkModeTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);