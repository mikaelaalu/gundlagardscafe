import styled from "styled-components";
import Link from "next/link";
import imageUrlBuilder from "../imageUrlBuilder";

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  height: 102px;
  width: 100vw;
  padding: 0 10%;

  section {
    margin-top: 30px;
    width: 100%;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 16px;
    width: 114px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--light-black);
    position: fixed;
    transform: ${(p) => (p.open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    padding: 0 0 0 0;
    transition: transform 0.3s ease-in-out;
    align-items: flex-start;
    justify-content: center;

    section {
      margin-top: 30px;
      text-align: left;
    }

    a {
      padding: 17px 24px;
      font-size: 24px;
      color: white;
      font-weight: normal;
    }
  }
`;

const Exit = styled.div`
  width: 25px;
  height: 20px;
  position: fixed;
  top: 40px;
  right: 20px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

const CrossOne = styled.div`
  width: 25px;
  height: 2px;
  background-color: var(--white);
  transform: rotate(45deg) translate(4px, 5px);
`;

const CrossTwo = styled.div`
  width: 25px;
  height: 2px;
  background-color: var(--white);
  transform: rotate(-45deg) translate(2px, -3px);
`;

const Logo = styled.img`
  width: auto;
  height: 180px;
`;

const LogoDesktop = styled.a`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-top: 30px;
  }
`;

const LastSection = styled.section`
  margin-bottom: 200px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

const RightNav = ({ props, open, setOpen, logoDesktop }) => {
  const iconSrc = logoDesktop.iconImage.asset._ref;
  const iconAlt = logoDesktop.iconAlt;

  return (
    <MenuList open={open}>
      <Exit onClick={() => setOpen(!open)}>
        <CrossOne></CrossOne>
        <CrossTwo></CrossTwo>
      </Exit>
      <Link href="/opening-hours">
        <section>
          <a>{props.openingHours}</a>
        </section>
      </Link>
      <Link href="/find-us">
        <section>
          <a>{props.findUs}</a>
        </section>
      </Link>

      <Link href="/about">
        <section>
          <a>{props.about}</a>
        </section>
      </Link>

      <Link href="/">
        <LogoDesktop>
          <Logo loading="lazy" src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
        </LogoDesktop>
      </Link>

      <Link href="/event">
        <section>
          <a>{props.event}</a>
        </section>
      </Link>
      <Link href="/catering">
        <section>
          <a>{props.catering}</a>
        </section>
      </Link>
      <Link href="/menu">
        <LastSection>
          <a>{props.menu}</a>
        </LastSection>
      </Link>
    </MenuList>
  );
};

export default RightNav;
