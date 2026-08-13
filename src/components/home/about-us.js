import React from "react"
import styled, { withTheme } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { breakpoints } from "../../theme"

import Text from "../common/text"

const aboutUs = "../../images/about-us.png"
const math1 = "../../images/math1.png"
const math2 = "../../images/math2.png"
const math3 = "../../images/math3.png"
const math3Circle = "../../images/math3.1.png"
const math4 = "../../images/math4.png"
const math5 = "../../images/math5.png"
const math6 = "../../images/math6.png"

const Content = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.large}) {
    margin: 0 auto;
  }
`

const Title = styled.div`
  font-family: Hatton;
  font-size: 50px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2.4px;
  padding: 15px 0;
  width: 100%;
  margin-bottom: 30px;
`

const Column = styled.div`
  text-align: center;
  padding: 30px;

  @media (min-width: ${breakpoints.medium}) {
    text-align: left;
    padding: 50px;
  }
`

const Math1 = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;

  img {
    display: none;
    width: 40% !important;

    @media (min-width: ${breakpoints.medium}) {
      width: 30% !important;
    }

    @media (min-width: ${breakpoints.large}) {
      display: block;
      width: 80px !important;
    }

    @media (min-width: ${breakpoints.large}) {
      width: 90px !important;
    }
  }
`

const Math2 = styled.div`
  position: absolute;
  top: 43%;
  right: 20%;

  img {
    width: 18% !important;
    display: none;

    @media (min-width: ${breakpoints.medium}) {
      width: 15% !important;
    }

    @media (min-width: ${breakpoints.large}) {
      display: block;
      width: 80px !important;
    }

    @media (min-width: ${breakpoints.large}) {
      width: 90px !important;
    }
  }
`

const Math3Circle = styled.div`
  position: absolute;
  top: 21%;
  right: 10%;
  animation: rotate 6s linear infinite;

  @media (min-width: ${breakpoints.large}) {
    right: 45% !important;
  }

  img {
    display: none;
    width: 45px !important;

    @media (min-width: ${breakpoints.large}) {
      display: block;
    }
  }
`

const Math3 = styled.div`
  position: absolute;
  top: 32%;
  right: 45%;

  img {
    display: none;
    width: 10% !important;

    @media (min-width: ${breakpoints.large}) {
      width: 45px !important;
      display: block;
    }
  }
`

const Math4 = styled.div`
  position: absolute;
  top: 11%;
  right: 32%;
  display: none;

  img {
    display: none;
    width: 20% !important;

    @media (min-width: ${breakpoints.medium}) {
      width: 15% !important;
    }

    @media (min-width: ${breakpoints.large}) {
      display: block;
      width: 90px !important;
    }

    @media (min-width: ${breakpoints.large}) {
      width: 100px !important;
    }
  }
`

const Math5 = styled.div`
  position: absolute;
  top: 22%;
  right: 14%;

  img {
    display: none;
    width: 24% !important;

    @media (min-width: ${breakpoints.medium}) {
      width: 20% !important;
    }

    @media (min-width: ${breakpoints.large}) {
      display: block;
      width: 130px !important;
    }

    @media (min-width: ${breakpoints.extralarge}) {
      width: 140px !important;
    }
  }
`

const Math6 = styled.div`
  position: absolute;
  top: 25%;
  right: 79%;

  img {
    display: none;
    width: 22% !important;

    @media (min-width: ${breakpoints.large}) {
      width: 110px !important;
      display: block;
    }
  }
`

const Rabbit = styled.div`
  magin: 0 auto;

  @media (min-width: ${breakpoints.large}) {
    margin: inherit;
  }

  img {
    width: 100% !important;

    @media (min-width: ${breakpoints.large}) {
      width: 90% !important;
    }
  }
`

const AboutUs = () => {
  return (
    <Content className="container" id="about-us">
      <div className="row">
        <Column className="col-md-6 d-lg-flex flex-lg-column">
          <Title>About Us</Title>
          <Text>
            <strong>POL Finance Group</strong> is a holding company built on
            scientific research. We operate a family of businesses across
            financial technology and crypto, and every one of them rests on the
            same foundation: rigorous, research-grade mathematics.
          </Text>
          <br />
          <Text>
            Founded and led by Santiago Di Paolo (economist, MSc Quantitative
            Finance) and Agustín Muñoz González (PhD Mathematics), we bring the
            standards of academic science to real capital. Where the industry
            trusts intuition, we derive and prove. We
            build, and we own what we build.
          </Text>
        </Column>
        <Column className="col-md-6 d-lg-flex flex-lg-column position-relative">
          <Math1>
            <StaticImage
              src={math1}
              data-sal="fade"
              data-sal-delay="0.5s"
              placeholder="fade"
              alt=""
            />
          </Math1>
          <Math2>
            <StaticImage
              src={math2}
              data-sal="fade"
              data-sal-delay="0.3s"
              placeholder="fade"
              alt=""
            />
          </Math2>
          <div data-sal="fade" data-sal-delay="0.7s">
            <Math3Circle>
              <StaticImage src={math3Circle} placeholder="fade" alt="" />
            </Math3Circle>
          </div>
          <Math3>
            <StaticImage
              src={math3}
              data-sal="fade"
              data-sal-delay="0.7s"
              placeholder="fade"
              alt=""
            />
          </Math3>
          <Math4>
            <StaticImage
              src={math4}
              data-sal="fade"
              data-sal-delay="0.9s"
              placeholder="fade"
              alt=""
            />
          </Math4>
          <Math5>
            <StaticImage
              src={math5}
              data-sal="fade"
              data-sal-delay="1.1s"
              placeholder="fade"
              alt=""
            />
          </Math5>
          <Math6>
            <StaticImage
              src={math6}
              data-sal="fade"
              data-sal-delay="1.3s"
              placeholder="fade"
              alt=""
            />
          </Math6>
          <Rabbit>
            <StaticImage src={aboutUs} placeholder="fade" alt="" />
          </Rabbit>
        </Column>
      </div>
    </Content>
  )
}

export default withTheme(AboutUs)
