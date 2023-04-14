import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
import Layout from "./pages/Layout";
import Routers from "./routers";
import ReactThreeFiber from "./pages/ReactThreeFiber";

const App = (): JSX.Element => {
  return (
    // <Layout>
    //   <Routers />
    // </Layout>
    <ReactThreeFiber />
  );
};

export default App;
