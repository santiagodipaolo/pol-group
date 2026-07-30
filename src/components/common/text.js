import React from "react"
import styled, { withTheme } from "styled-components"

const TextWrapper = styled.p`
  font-family: Metropolis;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.96px;
  margin-bottom: 0;

  &.bold {
    font-weight: bold;
  }
`

const Text = ({ children, bold = false }) => {
  return (
    <TextWrapper className={bold ? "bold" : "regular"}>{children}</TextWrapper>
  )
}

export default withTheme(Text)
