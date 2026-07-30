import React from "react"
import styled, { withTheme } from "styled-components"
import { colors } from "../../theme"
import { PROJECT_URL } from "../../constants/Constants"

const BreadCrumbWrapper = styled.ul`
  list-style: none;
  padding: 0;

  .active {
    font-weight: bold;
  }

  a {
    color: ${colors.fontColor};
  }
`

const BreadCrumb = ({ links }) => {
  return (
    <BreadCrumbWrapper
      id="breadcrumblist"
      itemScope
      itemType="http://schema.org/BreadcrumbList"
      className="d-flex"
    >
      <li
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        <a itemProp="item" href="https://pol.finance/">
          <span itemProp="name">POL</span>
        </a>{" "}
        / <meta itemProp="position" content="1" />{" "}
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
          className="active"
        >
          <a itemProp="item" href={`${PROJECT_URL}${link.src}`}>
            <span itemProp="name">{link.title}</span>
          </a>
          <meta itemProp="position" content={index + 2} />
        </li>
      ))}
    </BreadCrumbWrapper>
  )
}

export default withTheme(BreadCrumb)
