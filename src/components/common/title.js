import React from "react"
import styled, { withTheme } from "styled-components"
import { breakpoints } from "../../theme"

const HeadLine = styled.h1`
  font-family: "Hatton";
  font-size: clamp(1.6rem, 6vw, 46px);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  max-width: 100%;
  overflow-wrap: break-word;
`

const Title = ({ children }) => {
  return <HeadLine>{children}</HeadLine>
}

export default withTheme(Title)
