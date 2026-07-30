import React from "react"
import PropTypes from "prop-types"
import MenuLink from "../../menu-link"
import { withTheme } from "styled-components"

const HeaderNavigation = ({ onClick }) => {
  return (
    <>
      <MenuLink size="big" anchorLink={true} router={false} to="/#companies">
        Companies
      </MenuLink>
      <MenuLink size="big" anchorLink={true} router={false} to="/#about-us">
        About
      </MenuLink>
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
