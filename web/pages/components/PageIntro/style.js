import styled from "styled-components";

const textWrapper = styled.div`
  width: 90%;

  @media (min-width: 768px) {
    width: 100%;
  }

  /* if two <p> elements are placed after each other */
  p + p {
    margin-top: 20px;
  }
`;

export default { textWrapper };
