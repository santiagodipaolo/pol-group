import React from "react"
import styled from "styled-components"
import { colors } from "../../../theme"
import { LINKEDIN } from "../../../constants/Constants"

const Icon = styled.a`
  color: ${colors.fontColor};
  display: inline-flex;
  align-items: center;
  &:hover {
    color: ${colors.primary};
  }
`

const LinkedIn = ({ size = 30 }) => (
  <Icon href={LINKEDIN} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.73v20.53C0 23.22.8 24 1.77 24h20.45C23.2 24 24 23.22 24 22.27V1.73C24 .78 23.2 0 22.22 0Z" />
    </svg>
  </Icon>
)

export default LinkedIn
