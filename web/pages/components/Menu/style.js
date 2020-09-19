import styled from "styled-components";

const menu = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    padding: 0 50px;
  }
`;

const menuTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    /* width: 50%; */
    flex: 1;
    max-width: 400px;
    margin-right: 80px;
  }
`;

export default { menu, menuTextWrapper };
