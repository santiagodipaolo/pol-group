import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import { colors } from "../../theme"

const CustomLink = styled.span`
  color: ${colors.fontColor};
  margin-right: ${props => (!props.last ? "40px" : 0)};
  padding-top: 3px;
  border-bottom: solid 3px transparent;
  &:hover {
    color: ${colors.fontColor};
    padding-top: 3px;
    border-bottom: solid 3px;
    border-color: ${colors.primary};
  }
`

const HeaderLink = ({ href, last, children }) => {
  return (
    <Link to={href} activeClassName="active-link">
      <CustomLink last={last} className="body1">
        {children}
      </CustomLink>
    </Link>
  )
}

HeaderLink.propTypes = {
  href: PropTypes.string.isRequired,
  last: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default HeaderLink
