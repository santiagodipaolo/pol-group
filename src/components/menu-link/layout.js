import React from "react"
import styled from "styled-components"
import { colors } from "../../theme"

const Layout = styled.span`
  font-family: "Metropolis";
  text-transform: uppercase;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.8px;

  &.small {
    font-size: 11px;
  }
  &.medium {
    font-size: 13px;
  }
  &.big {
    font-size: 15px;
  }

  &.dark {
    color: ${colors.fontColor};
  }
  &.light {
    color: ${colors.fontColor};
  }
`

const LinkLayout = ({ children, ...rest }) => {
  return <Layout {...rest}>{children}</Layout>
}

export default LinkLayout
