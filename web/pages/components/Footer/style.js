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
  /* margin-bottom: 40px; */
`;

const footer = styled.footer`
  color: white;
  background-color: var(--secondary-mud);
  /* height: 580px; */
  display: flex;
  flex-direction: column;
  padding: 30px 24px 80px 24px;

  @media (min-width: 768px) {
    margin-top: 200px;
  }
`;

const logo = styled.img`
  width: 60px;
  height: 90px;
  margin-top: 56px;
  margin-bottom: 52px;
`;

const icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export default { footer, title, box, a, logo, icon, flex };
