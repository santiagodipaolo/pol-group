import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import styled from "styled-components";
import { breakpoints } from "../../../theme";

const starImg = "../../../images/star.png";

const StyledStar = styled.div`
  display: none;
  width: 15px;
  height: 15px;

  @media (min-width: ${breakpoints.medium}) {
    display: block;
  }

  @media (min-width: ${breakpoints.large}) {
    margin: 0 56px;
  }
`;

const Star = () => {
  return (
    <StyledStar>
      <StaticImage src={starImg} placeholder="none" alt="" />
    </StyledStar>
  );
};

export default Star;
