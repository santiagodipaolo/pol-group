import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import LinkLayout from "./layout"

const Hover = styled.span`
  padding-bottom: 6px;
  line-height: 20px;
  cursor: pointer;

  a {
    margin: 0px !important;
  }

  &.selected {
    font-weight: bold;
  }

  &:hover {
    font-weight: bold;
  }
`

/**
 * MenuLink component for navigation items
 * @component
 * @param {Object} props - Component props
 * @param {'small'|'big'} [props.size='small'] - Size variant of the link
 * @param {boolean} [props.anchorLink=false] - Whether to use anchor link behavior
 * @param {boolean} [props.router=true] - Whether to use router navigation
 * @param {string} props.to - Destination path or anchor
 * @param {string} [props.href] - External URL for regular anchor links
 * @param {string} [props.target] - Target attribute for the link (_blank, _self, etc)
 * @param {string} [props.rel] - Rel attribute for the link
 * @param {ReactNode} props.children - Link content
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * // Internal router link
 * <MenuLink to="/about">About</MenuLink>
 *
 * @example
 * // Anchor link
 * <MenuLink size="big" anchorLink={true} router={false} to="/#about-us">
 *   About Us
 * </MenuLink>
 *
 * @example
 * // External link
 * <MenuLink to="https://example.com" target="_blank" anchorLink={false} router={false} rel="noopener noreferrer">
 *   External Link
 * </MenuLink>
 */

const MenuLink = ({
  color = "light",
  size = "medium",
  to = "#",
  router = true,
  hideHover,
  children,
  target = "_self",
  anchorLink = false,
  selected = false,
  onClick = null,
  ...rest
}) => {
  return router ? (
    <Link to="/#">
      <LinkLayout className={`${color} ${size}`} {...rest}>
        <Hover className={`${selected ? "selected" : ""}`}>{children}</Hover>
      </LinkLayout>
    </Link>
  ) : anchorLink ? (
    <AnchorLink to={to}>
      <LinkLayout className={`${color} ${size}`} {...rest}>
        <Hover className={`${selected ? "selected" : ""}`}>{children}</Hover>
      </LinkLayout>
    </AnchorLink>
  ) : !!onClick ? (
    <LinkLayout onClick={onClick} className={`${color} ${size}`} {...rest}>
      <Hover className={`${selected ? "selected" : ""}`}>{children}</Hover>
    </LinkLayout>
  ) : (
    <a href={to} target={target}>
      <LinkLayout className={`${color} ${size}`} {...rest}>
        <Hover className={`${selected ? "selected" : ""}`}>{children}</Hover>
      </LinkLayout>
    </a>
  )
}

MenuLink.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.oneOf(["small", "medium", "big"]),
  to: PropTypes.string,
  bgColor: PropTypes.string,
  router: PropTypes.bool,
  hideHover: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default MenuLink
