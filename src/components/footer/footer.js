import React from "react"
import styled, { withTheme } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import X from "../common/social-network/x"
import LinkedIn from "../common/social-network/linkedin"
import Text from "../common/text"
import HeaderNavigation from "../header/header-navigation"

import { colors, breakpoints } from "../../theme"
import { PROJECT_NAME } from "../../constants/Constants"

const PolLogo = "../../images/pol-logo.png"

const Wrapper = styled.div`
  background-color: ${colors.headerBg};
  padding: 30px 0;

  & .logo-container {
    display: none;
    @media (min-width: ${breakpoints.extralarge}) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }

  .legal {
    p {
      margin-top: 10px;
      font-size: 10px;
      margin-bottom: 0;
    }
  }

  @media (min-width: ${breakpoints.medium}) {
    min-height: auto;
  }

  @media (min-width: ${breakpoints.extralarge}) {
    display: flex;
    align-items: center;
  }

  .footer-nav {
    a {
      font-weight: 300;
      margin-left: 10px;
    }
  }
`

const Data = styled.div`
  color: ${colors.fontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;

  a {
    margin: 5px 0;
  }

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;
    margin: 0;

    a {
      margin: 0;
    }
  }
`

const Social = styled.div`
  color: ${colors.fontColor};
  & a {
    color: ${colors.fontColor};
    & i {
      font-size: 20px;
      padding: 5px 2px;
    }
  }
  @media (min-width: ${breakpoints.medium}) {
    order: 1;
    & a {
      margin-right: 32px;
    }
  }
`

const Logo = styled.div`
  img {
    width: 70px !important;

    @media (min-width: ${breakpoints.medium}) {
      width: 102px !important;
    }
  }
`

const Footer = ({ toggleModal }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 d-flex flex-column align-items-center align-items-lg-start justify-content-lg-center">
            <Logo>
              <StaticImage
                src={PolLogo}
                alt={PROJECT_NAME}
                placeholder="fade"
              />
            </Logo>
            <div className="legal">
              <Text>
                &copy;&nbsp;
                {new Date().getFullYear()}&nbsp; All Rights Reserved.
              </Text>
            </div>
          </div>
          <div className="col-lg-8 d-flex flex-column align-items-center justify-content-lg-center">
            <Data>
              <HeaderNavigation onClick={toggleModal} />
            </Data>
          </div>
          <Social className="col-lg-2 d-flex align-items-center justify-content-around justify-lg-content-between col-md-6 justify-content-md-end align-items-md-center">
            <LinkedIn />
            <X />
          </Social>
        </div>
      </div>
    </Wrapper>
  )
}

export default withTheme(Footer)
