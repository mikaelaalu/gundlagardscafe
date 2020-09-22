import styled from "styled-components";
import Link from "next/link";
import Burger from "./Burger";
import imageUrlBuilder from "../imageUrlBuilder";

const Nav = styled.nav`
  width: 100%;
  height: 102px;
  background-color: var(--dipp-beige);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LogoMobile = styled.a`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

const Margin = styled.div`
  height: 136px;

  @media (min-width: 768px) {
    height: 202px;
  }
`;

const NavBar = ({ props, logoMobile, logoDesktop }) => {
  const iconSrc = logoMobile.iconImage.asset._ref;
  const iconAlt = logoMobile.iconAlt;

  return (
    <>
      <Nav>
        <Logo>
          <Link href="/">
            <LogoMobile>
              <Icon src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
            </LogoMobile>
          </Link>
        </Logo>
        <Burger props={props} logoDesktop={logoDesktop} />
      </Nav>
      <Margin />
    </>
  );
};

export default NavBar;
