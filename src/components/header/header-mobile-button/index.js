import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { colors } from "../../../theme";
import "./index.scss";

const Line = styled.span`
  background-color: ${colors.fontColor};
`;

const HeaderMobileButton = ({ color, isOpen, onClick }) => {
  return (
    <div className="mobile-btn" onClick={onClick}>
      <Line className={`line first ${isOpen ? "opened" : "closed"}`} />
      <Line className={`line last ${isOpen ? "opened" : "closed"}`} />
    </div>
  );
};

HeaderMobileButton.propTypes = {
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default HeaderMobileButton;
