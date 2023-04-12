import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props: any): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
