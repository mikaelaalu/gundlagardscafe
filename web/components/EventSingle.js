import styled from "styled-components";

const SingleEventWrapper = styled.div`
  width: 90%;

  h3 {
    font-weight: bold;
  }

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
    font-size: 16px;
  }
`;

const SingleEvent = ({ event }) => {
  const dates = event.eventDate;

  const getTime = (param) => {
    const jsonToDate = new Date(param);
    const time = jsonToDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  };

  const getDate = (param) => {
    const jsonToDate = new Date(param);
    const date = jsonToDate.toLocaleDateString("sv-SE", {
      month: "numeric", // "long" for string, ie september
      day: "numeric",
    });
    return date;
  };

  return (
    <SingleEventWrapper>
      <h3>{event.title}</h3>

      {dates.map((date, key) => (
        <DateTimeWrapper key={key}>
          <p>{getDate(date)}</p>
          <p className="time">Klockan {getTime(date)}</p>
        </DateTimeWrapper>
      ))}
    </SingleEventWrapper>
  );
};

export default SingleEvent;
