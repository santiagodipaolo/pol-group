import React from "react"
import SocialIcon from "./social-icon"
import { PROJECT_NAME, TWITTER } from "../../../constants/Constants"

const Twitter = () => {
  return (
    <SocialIcon
      href={TWITTER}
      title={`${PROJECT_NAME} - Twitter`}
      icon="fab fa-twitter"
    />
  )
}

export default Twitter
