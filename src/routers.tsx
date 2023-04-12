import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";

const Routers = (): JSX.Element => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default Routers;
