import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { colors } from "../../theme"
import { body1 } from "../global-styles"

const CustomLink = styled.span`
  color: ${colors.fontColor};
  display: inline-block;
  margin-bottom: 10px;
  border-bottom: solid 3px transparent;
  ${body1}
  &:hover {
    color: ${colors.fontColor};
    border-bottom: solid 3px;
    border-color: ${colors.primary};
    cursor: pointer;
  }
`

const FooterLink = ({ href = "#", children }) => {
  return (
    <CustomLink>
      <Link to={href}>{children}</Link>
    </CustomLink>
  )
}

export default FooterLink
