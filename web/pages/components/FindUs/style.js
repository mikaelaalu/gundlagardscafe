import styled from "styled-components";

const findUs = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 0 50px;
  }
`;

const findUsTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex: 0.9;
    max-width: 400px;
    margin-right: 80px;
  }
`;

const map = styled.iframe`
  width: 100%;
  height: 400px;

  @media (min-width: 768px) {
    flex: 1.1;
    max-width: 800px;
    min-width: 400px;
    height: 500px;
    border-radius: 54px;
  }
`;

export default { findUs, findUsTextWrapper, map };
