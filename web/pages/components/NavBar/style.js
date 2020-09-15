import styled from "styled-components";

const logoMobile = styled.a`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;
const margin = styled.div`
  height: 136px;

  @media (min-width: 768px) {
    height: 187px;
  }
`;

const nav = styled.nav`
  width: 100%;
  height: 102px;
  background-color: var(--dipp-beige);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
`;

const logo = styled.div`
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const icon = styled.img`
  width: 60px;
  height: 60px;
`;

export default { nav, logo, logoMobile, margin, icon };
