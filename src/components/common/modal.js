import React from "react";
import Helmet from "react-helmet";
import styled, { withTheme } from "styled-components";
import Text from "./text";

import { breakpoints, colors } from "../../theme";
import { StaticImage } from "gatsby-plugin-image";
import { PROJECT_NAME } from "../../constants/Constants";
const rabbit = "../../images/rabbit-products.png";

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 0;
  z-index: 9;
  opacity: 0;
  overflow: hidden;
  top: 0%;
  transition: height 0ms 400ms, opacity 400ms 0ms;

  &.show {
    height: 100vh;
    opacity: 1;
    transition: height 0ms 0ms, opacity 600ms 0ms;
  }

  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }
`;
const ModalContent = styled.div`
  position: absolute;
  background: linear-gradient(
    to top,
    ${colors.headerBg} 0%,
    ${colors.headerBg} 45%,
    #fff 45%,
    #fff 100%
  );

  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${breakpoints.small}) {
    width: 80%;
  }

  @media (min-width: ${breakpoints.medium}) {
    background: #fff;
    width: 50%;
  }
`;

const FormColumn = styled.div`
  padding: 40px;
`;

const CloseColumn = styled.div`
  background-color: ${colors.headerBg};
  border-left: 1px solid ${colors.fontColor};
`;

const Title = styled.h4`
  font-family: "Hatton";
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 24px;
`;

const Input = styled.input`
  border: 0;
  font-family: 'Metropolis',
  font-size: 24px;
  margin-bottom: 5px;
  border-bottom: 1px solid ${colors.fontColor};
  width: 90%;
  padding-left: 5px;
`;

const TextArea = styled.textarea`
  font-family: 'Metropolis',
  font-size: 24px;
  margin-bottom: 5px;
  border: 1px solid ${colors.fontColor};
  width: 90%;
  height: 100px;
  padding: 5px;
  background-color:  ${colors.headerBg};

  @media (min-width: ${breakpoints.medium}) {
    background-color: #FFF;
  }
`;

const CloseWrapper = styled.span`
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;

  @media (min-width: ${breakpoints.large}) {
    right: 0%;
  }
`;

const Rabbit = styled.div`
  position: absolute;
  bottom: 0%;
  img {
    width: 170px;
  }
`;

const ButtonWrapper = styled.p`
  text-align: center;
`;

const Button = styled.input`
  background-color: ${colors.primary};
  padding: 5px 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Metropolis";

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

const Modal = ({ isOpen, toggleModal }) => {
  return (
    <>
      {isOpen && (
        <Helmet>
          <body className="no-scroll" />
        </Helmet>
      )}
      <ModalWrapper className={isOpen ? "show" : "hide"}>
        <div className="overlay" onClick={toggleModal} />
        <ModalContent>
          <div className="row">
            <FormColumn className="col-lg-9">
              <Title>Tell us about your projects</Title>
              <form
                name="modalContact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input className="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="modalContact" />
                <p>
                  <Input placeholder="Name" type="text" name="name" required />
                </p>
                <p>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </p>
                <p>
                  <Input placeholder="Company" type="text" name="company" />
                </p>
                <p>
                  <TextArea
                    placeholder="Message"
                    name="message"
                    required
                  ></TextArea>
                </p>
                <ButtonWrapper>
                  <Button type="submit" value="Send" />
                </ButtonWrapper>
              </form>
            </FormColumn>
            <CloseColumn className="col-lg-3">
              <CloseWrapper onClick={toggleModal}>
                <Text bold>X</Text>
              </CloseWrapper>
              <Rabbit>
                <StaticImage
                  className="d-none d-lg-flex"
                  src={rabbit}
                  placeholder="fade"
                  alt={PROJECT_NAME}
                />
              </Rabbit>
            </CloseColumn>
          </div>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default withTheme(Modal);
