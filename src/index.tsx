import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global-styles";
import { theme } from "./styles/theme";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
