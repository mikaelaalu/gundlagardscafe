import styled from "styled-components";

const SingleEventWrapper = styled.div`
  width: 90%;

  @media (min-width: 768px) {
    flex: 0.28;
  }
`;

const DateTimeWrapper = styled.div`
  width: 100%;
  border-bottom: 0.6px solid var(--white);

  p:first-child {
    margin-top: 24px;
  }

  p:last-child {
    margin-bottom: 24px;
  }
`;

const SingleEvent = ({ event }) => {
  return (
    <SingleEventWrapper>
      <h3>{event.title}</h3>

      <DateTimeWrapper>
        <p>datum</p>
        <p>tid</p>
      </DateTimeWrapper>
      <DateTimeWrapper>
        <p>datum</p>
        <p>tid</p>
      </DateTimeWrapper>
      <DateTimeWrapper>
        <p>datum</p>
        <p>tid</p>
      </DateTimeWrapper>
    </SingleEventWrapper>
  );
};

export default SingleEvent;
