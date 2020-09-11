import styled from "styled-components";

const logoMobile = styled.a`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const nav = styled.nav`
  width: 100%;
  height: 102px;
  background-color: var(--dipp-beige);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const logo = styled.div`
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default { nav, logo, logoMobile };
