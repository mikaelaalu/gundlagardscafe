import Style from "./style";

const SingleEvent = ({ event }) => {
  return (
    <Style.singleEventWrapper>
      <h3>{event.title}</h3>

      <Style.dateTimeWrapper>
        <p>datum</p>
        <p>tid</p>
      </Style.dateTimeWrapper>
      <Style.dateTimeWrapper>
        <p>datum</p>
        <p>tid</p>
      </Style.dateTimeWrapper>
      <Style.dateTimeWrapper>
        <p>datum</p>
        <p>tid</p>
      </Style.dateTimeWrapper>
    </Style.singleEventWrapper>
  );
};

export default SingleEvent;
