import styled from "styled-components";

const singleEventWrapper = styled.div`
  width: 90%;

  @media (min-width: 768px) {
    flex: 0.28;
  }
`;

const dateTimeWrapper = styled.div`
  width: 100%;
  border-bottom: 0.6px solid var(--white);

  p:first-child {
    margin-top: 24px;
  }

  p:last-child {
    margin-bottom: 24px;
  }
`;

export default { singleEventWrapper, dateTimeWrapper };
