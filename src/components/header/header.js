import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { colors, breakpoints } from "../../theme";

import HeaderMobileButton from "./header-mobile-button";
import HeaderNavigation from "./header-navigation";

import X from "../common/social-network/x";
import LinkedIn from "../common/social-network/linkedin";

import "./header.scss";
import { Helmet } from "react-helmet";
import { PROJECT_NAME } from "../../constants/Constants";

const LogoImg = "../../../src/images/pol-logo.png";

const Container = styled.div`
  height: 100%;
`;

const Wrapper = styled.header`
  background-color: ${colors.headerBg};
  align-items: center;
  padding: 10px 0;

  @media (min-width: ${breakpoints.medium}) {
    height: 90px;
    padding: 0;
  }
`;
const Brand = styled.div`
  font-family: "Metropolis";
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${colors.fontColor};
  white-space: nowrap;
  @media (min-width: ${breakpoints.medium}) {
    font-size: 16px;
  }
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  & a {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 400;
    @media (min-width: ${breakpoints.large}) {
      font-weight: inherit;
      font-size: inherit;
    }
  }
  @media (min-width: ${breakpoints.large}) {
    margin-top: 0;
    flex-direction: row;
    & a {
      margin-bottom: 0;
      &.last {
        margin-right: 0;
      }
    }
  }
`;
const TogglerContainer = styled.div`
  margin-left: 25px;
  z-index: 4;
`;
const MobileMenu = styled.div`
  background-color: ${colors.headerBg};
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
  transition: all 0.25s linear;
  padding: 20px 30px;
  color: ${colors.fontColor} !important;
`;

const Header = ({ toggleModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <Helmet>
          <body className="no-scroll" />
        </Helmet>
      )}
      <header>
        <nav className={`sg-header${isOpen ? " opened" : ""}`}>
          <Wrapper>
            <Container className="container">
              <Container className="row">
                <div
                  className="col-8 d-flex align-items-center col-md-3"
                  style={{ zIndex: 4 }}
                >
                  <Link to="/">
                    <Brand>POL Finance Group</Brand>
                  </Link>
                </div>

                <div className="col-4 col-md-9 d-flex align-items-center justify-content-end">
                  <Navigation className="d-none d-lg-flex align-items-md-center justify-content-md-end">
                    <HeaderNavigation onClick={toggleModal} />
                  </Navigation>
                  <TogglerContainer className="d-lg-none">
                    <HeaderMobileButton
                      onClick={() => setIsOpen((open) => !open)}
                      isOpen={isOpen}
                    />
                  </TogglerContainer>
                </div>
              </Container>
            </Container>
            {isOpen && (
              <MobileMenu className="d-flex flex-column">
                <Navigation>
                  <HeaderNavigation isOpened={true} onClick={toggleModal} />
                </Navigation>
                <div className="mt-auto d-flex justify-content-between">
                  <LinkedIn />
                  <X />
                </div>
              </MobileMenu>
            )}
          </Wrapper>
        </nav>
      </header>
    </>
  );
};

export default withTheme(Header);
