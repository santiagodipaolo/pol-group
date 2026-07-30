import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import LinkLayout from "./layout"

const Hover = styled.span`
  padding-bottom: 6px;
  line-height: 20px;
`

const FooterLink = ({
  color = "light",
  size = "small",
  to = "#",
  router = true,
  hideHover,
  children,
  target = "_self",
  anchorLink = false,
  ...rest
}) => {
  return router ? (
    <Link to="/#">
      <LinkLayout className={`${color} ${size}`} {...rest}>
        <Hover>{children}</Hover>
      </LinkLayout>
    </Link>
  ) : (
    anchorLink ? (
      <a href="/#">
        <LinkLayout className={`${color} ${size}`} {...rest}>
          <Hover>{children}</Hover>
        </LinkLayout>
      </a>
    ) : (
      <a href={to} target={target}>
        <LinkLayout className={`${color} ${size}`} {...rest}>
          <Hover>{children}</Hover>
        </LinkLayout>
      </a>
    )
  )
}

FooterLink.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.oneOf(["small", "medium", "big"]),
  to: PropTypes.string,
  bgColor: PropTypes.string,
  router: PropTypes.bool,
  hideHover: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default FooterLink
