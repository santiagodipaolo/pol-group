import React from "react"
import SocialIcon from "./social-icon"
import { PROJECT_NAME, DISCORD } from "../../../constants/Constants"

const Discord = () => {
  return (
    <SocialIcon
      href={DISCORD}
      title={`${PROJECT_NAME} - Discord`}
      icon="fa-brands fa-discord"
    />
  )
}

export default Discord
