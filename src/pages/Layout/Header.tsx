import Icons from "@/assets/icons";
import React from "react";
import styled from "styled-components";

const Header = (): JSX.Element => {
  return (
    <Style>
      <Icons.perLogoBlack />
    </Style>
  );
};

export default Header;

const Style = styled.header`
  border: 1px solid red;
  max-width: 1364px;
  margin: 0 auto;
`;
