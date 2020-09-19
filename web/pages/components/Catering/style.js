import styled from "styled-components";

const catering = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const textWrapper = styled.div`
  width: 90%;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const info = styled.div`
  margin: 24px 0;
`;

export default { catering, textWrapper, info };
