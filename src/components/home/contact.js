import React from "react";
import styled, { withTheme } from "styled-components";

import { breakpoints, colors } from "../../theme";
import X from "../common/social-network/x";
import LinkedIn from "../common/social-network/linkedin";
import { StaticImage } from "gatsby-plugin-image";

const rabbit = "../../images/rabit-footer.png";
const star = "../../images/star.png";
const hat = "../../images/hat.png";

const Content = styled.div`
  text-align: center;
  width: 100%;
  @media (min-width: ${breakpoints.large}) {
    margin: 0 auto;
  }
`;

const Title = styled.h3`
  font-family: Metropolis;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2.4px;
  text-align: center;
  text-transform: uppercase;
  padding: 15px 0;
  width: 100%;
  border-bottom: 1px solid ${colors.fontColor};
`;

const Column = styled.div`
  padding: 50px;
  border: 1px solid ${colors.fontColor};
  border-top: 0;

  @media (min-width: ${breakpoints.large}) {
    padding: 100px;
    border: 0;
  }

  &.center-col {
    border-left: 1px solid ${colors.fontColor};
    border-right: 1px solid ${colors.fontColor};
  }

  &.last-col {
    border-bottom: 0;
  }
`;

const SocialNetworks = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  width: 30%;
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${breakpoints.large}) {
    width: 20%;
  }

  i {
    font-size: 25px;

    @media (min-width: ${breakpoints.large}) {
      font-size: 35px;
    }
  }
`;

const RabittFotter = styled.div`
  position: absolute;
  bottom: -30px;
  left: 5%;

  @media (min-width: ${breakpoints.large}) {
    bottom: -28px;
  }

  img {
    width: 70px !important;

    @media (min-width: ${breakpoints.large}) {
      width: 110px !important;
    }
  }
`;

const Hat = styled.div`
  position: absolute;
  top: 15px;
  right: 3%;

  @media (min-width: ${breakpoints.large}) {
    right: 5%;
    top: 30px;
  }

  img {
    width: 45px !important;

    @media (min-width: ${breakpoints.large}) {
      width: 110px !important;
    }
  }
`;

const Star4 = styled.div`
  position: absolute;
  top: 17%;
  right: 2%;
  transform: translate(-5%, 0%);
  animation: float 10s ease-in-out infinite;
  display: none;

  @media (min-width: ${breakpoints.large}) {
    display: block;
    top: 17%;
    right: 15%;
  }

  img {
    width: 20px !important;
  }
`;

const Star5 = styled.div`
  position: absolute;
  bottom: 37%;
  left: 2%;
  transform: translate(-5%, 0%);
  animation: float 10s ease-in-out infinite;

  @media (min-width: ${breakpoints.large}) {
    top: 73%;
    left: 0%;
  }

  img {
    width: 20px !important;
  }
`;

const Star6 = styled.div`
  position: absolute;
  bottom: 45%;
  left: 5%;
  transform: translate(-3%, 0%);
  animation: float 10s ease-in-out infinite;

  @media (min-width: ${breakpoints.large}) {
    transform: translate(-5%, 0%);
    animation: float 20s ease-in-out infinite;
    left: 18%;
    top: 35%;
  }

  img {
    width: 10px !important;
  }
`;

const Contact = ({ toggleModal }) => {
  return (
    <div id="contact">
      <div className="row">
        <div className="col-12 d-lg-flex flex-lg-column">
          <Title>Get in touch</Title>
        </div>
      </div>
      <Content className="container">
        <div className="row">
          <Column className="col-12 d-lg-flex flex-lg-column position-relative">
            <RabittFotter>
              <StaticImage src={rabbit} placeholder="fade" alt="" />
            </RabittFotter>
            <Hat>
              <StaticImage
                src={hat}
                className="wow fadeIn"
                data-wow-delay="0.7s"
                placeholder="fade"
                alt=""
              />
            </Hat>
            <Star5>
              <StaticImage src={star} placeholder="fade" alt="" />
            </Star5>
            <Star6>
              <StaticImage src={star} placeholder="fade" alt="" />
            </Star6>
            <Star4>
              <StaticImage src={star} placeholder="fade" alt="" />
            </Star4>
            <SocialNetworks>
              <X size={28} />
              <LinkedIn size={28} />
            </SocialNetworks>
          </Column>
        </div>
      </Content>
    </div>
  );
};

export default withTheme(Contact);
