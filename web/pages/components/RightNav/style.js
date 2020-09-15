import styled from "styled-components";

const logo = styled.img`
  width: 114px;
  height: 180px;
`;

const logoDesktop = styled.a`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-top: 60px;
  }
`;

//Fix hamburger menu styling in here, in @media
const ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  height: 102px;
  width: 100vw;
  padding: 0 10%;

  section {
    margin-top: 40px;
    width: 100%;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 16px;
    width: 114px;
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

const exit = styled.div`
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

//Update styling for cross in here
const crossOne = styled.div`
  width: 25px;
  height: 2px;
  background-color: var(--white);
  transform: rotate(45deg) translate(4px, 5px);
`;

const crossTwo = styled.div`
  width: 25px;
  height: 2px;
  background-color: var(--white);
  transform: rotate(-45deg) translate(2px, -3px);
`;

export default { ul, exit, crossOne, crossTwo, logoDesktop, logo };
