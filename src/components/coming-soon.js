import React from "react";
import styled, { withTheme } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { breakpoints } from "../theme";
import { PROJECT_NAME } from "../constants/Constants";
import Twitter from "./common/social-network/twitter";
import Discord from "./common/social-network/discord";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  @media (min-width: ${breakpoints.large}) {
    margin: 0 auto;
  }
`;

const TitleText = styled.div`
  font-family: Hatton;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.96px;
  text-align: center;
  margin: 20px 0;
  text-transform: uppercase;
  width: 70%;

  @media (min-width: ${breakpoints.large}) {
    width: 100%;
  }
`;

const SocialNetworks = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  width: 50%;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${breakpoints.large}) {
    width: 10%;
  }

  i {
    font-size: 25px;

    @media (min-width: ${breakpoints.large}) {
      font-size: 35px;
    }
  }
`;

const ComingSoon = ({ title }) => {
  return (
    <Content className="container d-flex flex-column align-items-center justify-content-center">
      <StaticImage
        style={{ width: "25%" }}
        src={"../images/logo-circular.png"}
        alt={PROJECT_NAME}
        placeholder="blurred"
      />
      <TitleText>{!title ? "Get in touch with us!" : title}</TitleText>
      <SocialNetworks>
        <Discord size={35} />
        <Twitter size={35} />
      </SocialNetworks>
    </Content>
  );
};

export default withTheme(ComingSoon);
