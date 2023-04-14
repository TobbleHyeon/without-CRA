import images from "@/assets/images";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Visual = (): JSX.Element => {
  const imageResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Section>
      <h2 hidden />
      <img
        src={imageResponsive ? images.mainVisualMobile : images.mainVisual}
        alt="main_visual"
      />
    </Section>
  );
};

export default Visual;

const Section = styled.section`
  margin-top: 6rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }

  img {
    width: 100%;
  }
`;
