import React from "react"
import styled, { withTheme } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { breakpoints, colors } from "../../theme"

import Button from "../common/button"
import Title from "../common/title"
import { PROJECT_NAME } from "../../constants/Constants"

const polLogo = "../../images/pol-logo.png"
const star = "../../images/star.png"

const Content = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
  padding: 50px 0;

  @media (min-width: ${breakpoints.large}) {
    margin: 0 auto;
    padding: 76px 0;
  }

  h1 {
    text-align: center;
    margin: 0 auto 20px;
    max-width: 100%;
    overflow-wrap: break-word;
    font-size: clamp(1.6rem, 6vw, 46px);
  }
`

const Inner = styled.div`
  position: relative;
  z-index: 1;
`

const LogoMark = styled.div`
  width: 150px;
  margin: 0 auto 30px;

  @media (min-width: ${breakpoints.medium}) {
    width: 200px;
    margin-bottom: 38px;
  }
`

const SubHeadLine = styled.h2`
  color: ${colors.fontColor};
  font-family: Metropolis;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.55;
  letter-spacing: 3px;
  text-transform: uppercase;
  max-width: min(420px, 100%);
  margin: 0 auto 45px;

  @media (min-width: ${breakpoints.medium}) {
    font-size: 18px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const S1 = styled.div`
  position: absolute;
  top: 14%;
  left: 20%;
  animation: float 15s ease-in-out infinite;
  img {
    width: 14px !important;
  }
`
const S2 = styled.div`
  position: absolute;
  top: 22%;
  right: 19%;
  animation: float 12s ease-in-out infinite;
  img {
    width: 20px !important;
  }
`
const S3 = styled.div`
  position: absolute;
  bottom: 26%;
  left: 15%;
  animation: float 10s ease-in-out infinite;
  img {
    width: 12px !important;
  }
`
const S4 = styled.div`
  position: absolute;
  bottom: 20%;
  right: 23%;
  animation: float 14s ease-in-out infinite;
  img {
    width: 18px !important;
  }
`

const HomeBanner = ({ toggleModal }) => {
  return (
    <Content className="container">
      <S1>
        <StaticImage src={star} placeholder="none" alt="" />
      </S1>
      <S2>
        <StaticImage src={star} placeholder="none" alt="" />
      </S2>
      <S3>
        <StaticImage src={star} placeholder="none" alt="" />
      </S3>
      <S4>
        <StaticImage src={star} placeholder="none" alt="" />
      </S4>
      <Inner>
        <LogoMark>
          <StaticImage src={polLogo} placeholder="none" alt={PROJECT_NAME} />
        </LogoMark>
        <Title>We build financial technology</Title>
        <SubHeadLine>
          A holding company grounded in scientific research
        </SubHeadLine>
        <ButtonWrapper onClick={toggleModal}>
          <Button text="Contact us" />
        </ButtonWrapper>
      </Inner>
    </Content>
  )
}

export default withTheme(HomeBanner)
