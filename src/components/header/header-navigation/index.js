import React from "react"
import PropTypes from "prop-types"
import MenuLink from "../../menu-link"
import Star from "./star"
import { withTheme } from "styled-components"

const HeaderNavigation = ({ onClick }) => {
  return (
    <>
      <MenuLink size="big" anchorLink={true} router={false} to="/#companies">
        Portfolio
      </MenuLink>
      <Star />
      <MenuLink size="big" anchorLink={true} router={false} to="/#about-us">
        About
      </MenuLink>
      <Star />
      <MenuLink onClick={onClick} size="big" anchorLink={false} router={false}>
        Contact
      </MenuLink>
    </>
  )
}

HeaderNavigation.propTypes = {
  theme: PropTypes.object,
}

export default withTheme(HeaderNavigation)
