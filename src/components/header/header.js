import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "gatsby";

import { colors, breakpoints } from "../../theme";

import HeaderMobileButton from "./header-mobile-button";
import HeaderNavigation from "./header-navigation";

import X from "../common/social-network/x";
import LinkedIn from "../common/social-network/linkedin";

import "./header.scss";
import { Helmet } from "react-helmet";

const Wrapper = styled.header`
  background-color: ${colors.headerBg};
  padding: 10px 0;

  @media (min-width: ${breakpoints.medium}) {
    padding: 0;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.medium}) {
    height: 90px;
  }
`;

const Brand = styled.div`
  font-family: "Metropolis";
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: ${colors.fontColor};
  white-space: nowrap;

  span {
    font-weight: 400;
    color: #8a8578;
  }

  @media (min-width: ${breakpoints.medium}) {
    font-size: 20px;
  }
`;

const NavCenter = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 44px;
`;

const Right = styled.div``;

const CtaButton = styled.button`
  font-family: "Metropolis";
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${colors.fontColor};
  background: transparent;
  border: 1px solid ${colors.fontColor};
  border-radius: 8px;
  padding: 11px 22px;
  cursor: pointer;
  transition: background 0.25s, color 0.25s;

  &:hover {
    background: ${colors.fontColor};
    color: ${colors.lightBg};
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
  }
`;

const TogglerContainer = styled.div`
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
            <div className="container">
              <Bar>
                <Link to="/">
                  <Brand>
                    POL <span>Finance Group</span>
                  </Brand>
                </Link>

                <NavCenter className="d-none d-lg-flex">
                  <HeaderNavigation onClick={toggleModal} />
                </NavCenter>

                <Right className="d-none d-lg-block">
                  <CtaButton onClick={toggleModal}>Get in touch</CtaButton>
                </Right>

                <TogglerContainer className="d-lg-none">
                  <HeaderMobileButton
                    onClick={() => setIsOpen((open) => !open)}
                    isOpen={isOpen}
                  />
                </TogglerContainer>
              </Bar>
            </div>

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
