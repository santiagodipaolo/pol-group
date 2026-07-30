import React from "react"
import styled, { withTheme } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { PROJECT_NAME } from "../../constants/Constants"

import { breakpoints, colors } from "../../theme"

import Button from "../common/button"
import Title from "../common/title"

const ticket = "../../images/ticket.png"

const Content = styled.div`
  h1 {
    color: ${colors.fontColor};
    text-align: center;
    margin-bottom: 30px;

    @media (min-width: ${breakpoints.medium}) {
      text-align: left;
    }
  }
`

const BorderWrapper = styled.div`
  border-left: 1px solid ${colors.fontColor};
  border-right: 1px solid ${colors.fontColor};
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`

const Ticket = styled.div`
  margin: 20px 0;

  div {
    margin: 0 auto !important;
  }

  img {
    margin: 0 auto !important;
    width: 250px !important;

    @media (min-width: ${breakpoints.medium}) {
      width: 300px !important;
      margin-bottom: 30px;
    }

    @media (min-width: ${breakpoints.large}) {
      margin-bottom: 0;
      width: 65% !important;
      max-width: 500px !important;
    }
  }
`

const ButtonWrapper = styled.div`
  justify-content: center;

  @media (min-width: ${breakpoints.large}) {
    justify-content: flex-start;
  }
`

const AuditsBanner = ({ toggleModal }) => {
  return (
    <Content className="container" data-wow-delay="0.2s">
      <BorderWrapper>
        <div className="row">
          <div className="col-lg-4 d-lg-flex flex-lg-column align-items-center">
            <Ticket className="d-flex align-items-center">
              <StaticImage
                src={ticket}
                alt={`Ticket - ${PROJECT_NAME}`}
                placeholder="fade"
              />
            </Ticket>
          </div>
          <div className="col-lg-8 d-flex flex-column">
            <Title>Discover what we've been working on</Title>
            <ButtonWrapper onClick={toggleModal} className="d-flex">
              <Button text="REQUEST A QUOTE" />
            </ButtonWrapper>
          </div>
        </div>
      </BorderWrapper>
    </Content>
  )
}

export default withTheme(AuditsBanner)
