import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = (props: any): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  max-width: 1920px;
  margin: 0 auto;
`;
