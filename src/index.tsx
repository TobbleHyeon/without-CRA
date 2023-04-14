import React, { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Box from "./components/Box";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  // <BrowserRouter>
  //   <GlobalStyle />
  //   <App />
  // </BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
);
