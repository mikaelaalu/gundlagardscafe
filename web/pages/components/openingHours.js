const OpeningHours = ({ props }) => {
  console.log(props);
  return (
    <div>
      <h2>{props.titleOpening}</h2>
      <div>
        <p>{props.monday}</p>
        <p>{props.openMonday}</p>
      </div>
      <div>
        <p>{props.tuesday}</p>
        <p>{props.openTuesady}</p>
      </div>
      <div>
        <p>{props.wednesday}</p>
        <p>{props.openWednesday}</p>
      </div>
      <div>
        <p>{props.thursday}</p>
        <p>{props.openThursday}</p>
      </div>
      <div>
        <p>{props.friday}</p>
        <p>{props.openFriday}</p>
      </div>
      <div>
        <p>{props.saturday}</p>
        <p>{props.openSaturday}</p>
      </div>
      <div>
        <p>{props.sunday}</p>
        <p>{props.openSunday}</p>
      </div>
    </div>
  );
};

export default OpeningHours;
