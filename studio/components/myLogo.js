import React from "react";
import logo from "../static/log.png";
import styled from "styled-components";

const Logo = styled.div`
  width: 25px;
  height: 25px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const myLogo = () => {
  return (
    <Logo>
      <img src={logo} alt="Gundla logo" />
    </Logo>
  );
};

export default myLogo;
