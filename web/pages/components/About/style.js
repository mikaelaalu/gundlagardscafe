import styled from "styled-components";

const about = styled.section`
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

const aboutTextWrapper = styled.div`
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

export default { about, aboutTextWrapper };
