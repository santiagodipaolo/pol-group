import React from "react"
import styled from "styled-components"
import { colors } from "../../../theme"
import { TWITTER } from "../../../constants/Constants"

const Icon = styled.a`
  color: ${colors.fontColor};
  display: inline-flex;
  align-items: center;
  &:hover {
    color: ${colors.primary};
  }
`

const X = ({ size = 30 }) => (
  <Icon href={TWITTER} target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 1.2h3.68l-8.04 9.19L24 22.8h-7.41l-5.8-7.58L4.15 22.8H.47l8.6-9.83L0 1.2h7.6l5.24 6.93L18.9 1.2Zm-1.29 19.4h2.04L6.48 3.3H4.29l13.32 17.3Z" />
    </svg>
  </Icon>
)

export default X
