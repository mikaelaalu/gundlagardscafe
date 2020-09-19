import styled from "styled-components";

const pageTitle = styled.div`
  margin-top: 10px;

  h2 {
    font-size: 24px;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }
`;

export default { pageTitle };
