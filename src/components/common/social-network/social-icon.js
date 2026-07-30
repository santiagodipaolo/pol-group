import React from "react"
import styled from "styled-components"
import { colors } from "../../../theme"

const Icon = styled.a`
  & i {
    padding: 5px 0;
    color: ${colors.fontColor};
  }
  &:hover {
    & i {
      color: ${colors.primary};
    }
  }
`

const SocialIcon = ({ href, title, icon, size }) => {
  return (
    <Icon rel="noopener noreferrer" href={href} target="_blank" title={title}>
      <i
        className={`fa fa-lg ${icon}`}
        style={{ fontSize: size }}
        aria-hidden="true"
      />
    </Icon>
  )
}

export default SocialIcon
