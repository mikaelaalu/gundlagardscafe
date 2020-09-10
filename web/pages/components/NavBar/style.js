import styled from "styled-components";

const nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid black;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  a {
    padding: 18px 10px;
    text-decoration: none;
    color: black;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: hotpink;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    padding-top: 80px;

    a {
      padding: 17px 24px;
      font-size: 24px;
    }
  }
`;

const logo = styled.div`
  padding: 15px 0;
`;

export default { nav, logo, ul };
