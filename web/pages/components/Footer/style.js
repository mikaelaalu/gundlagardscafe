import styled from "styled-components";

const a = styled.a`
  color: white;
  text-decoration: none;
`;

const title = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;

const box = styled.div`
  display: flex;
  flex-direction: column;
`;

const footer = styled.footer`
  color: white;
  background-color: var(--secondary-mud);
  height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 6%;
`;

const logo = styled.img`
  width: 54px;
  height: 88px;
`;

export default { footer, title, box, a, logo };
