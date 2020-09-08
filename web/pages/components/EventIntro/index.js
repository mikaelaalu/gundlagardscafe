// import Style from "./style";

const EventIntro = (props) => {
  return (
    <div>
      {/* intro to page */}
      <h2>{props.heading}</h2>
      <p>{props.intro}</p>
    </div>
  );
};

export default EventIntro;
