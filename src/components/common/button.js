import React from "react"
import styled, { withTheme } from "styled-components"

import { breakpoints, colors } from "../../theme"

const ButtonWrap = styled.a`
  background: ${colors.primary};
  color: ${colors.fontColorSecondary};
  height: 50px;
  padding: 12px 10px;
  text-align: left;
  width: fit-content;
  border-radius: 13px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: "Metropolis";
  @media (min-width: ${breakpoints.large}) {
    letter-spacing: 2px;
    padding: 14px 20px;
  }

  &:hover {
    color: ${colors.fontColorSecondary};
    transition: 0.4s;
    background: ${colors.primaryHover};
  }
`

const Button = ({ text, link, target = "_self" }) => {
  return (
    <ButtonWrap href={link} target={target}>
      {text}
    </ButtonWrap>
  )
}

export default withTheme(Button)
