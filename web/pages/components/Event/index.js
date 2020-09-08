// import Style from "./style";

const Event = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <p>{props.date}</p>
      <p>{props.time}</p>
    </div>
  );
};

export default Event;
