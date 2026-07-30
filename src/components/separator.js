import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

const SeparatorWrapper = styled.div`
  width: 100%;

  .line {
    border-bottom-width: 1.5px;
    border-bottom-style: solid;
    border-bottom-color: ${colors.fontColor};
    width: 100%;
    display: block;
  }
  .space {
    height: 8px;
    width: 100%;
    display: block;
  }
`;

function Separator() {
  return (
    <SeparatorWrapper>
      <div className="line" />
      <div className="space" />
      <div className="line" />
    </SeparatorWrapper>
  );
}

export default Separator;
