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
  // console.log("eventsingle:");
  let separate;
  let day;
  const dates = event.eventDate;
  // console.log("dates:");
  // console.log(dates);

  dates.forEach((date) => {
    separate = date.split("T");
    // day = separate[0];
  });
  // console.log("separate:");
  // console.log(separate);
  // console.log("day:");
  // console.log(day);

  // const split = dates.forEach((date) => {
  //   const separate = date.split("T");
  //   console.log(separate);

  //   // const day = separate[0];
  //   // const time = separate[1];
  //   // console.log(day);
  //   // console.log(time);
  //   // return day;
  // });

  // console.log(split);

  return (
    <SingleEventWrapper>
      <h3>{event.title}</h3>

      {dates.map((date, key) => (
        <DateTimeWrapper key={key}>
          <p>{date}</p>
          <p>tid</p>
        </DateTimeWrapper>
      ))}

      {/* <DateTimeWrapper>
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
      </DateTimeWrapper> */}
    </SingleEventWrapper>
  );
};

export default SingleEvent;
