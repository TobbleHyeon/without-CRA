import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </>
);
