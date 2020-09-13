import Style from "./style";
import PageTitle from "./../PageTitle";

const OpeningHours = ({ props }) => {
  return (
    <Style.box>
      <h2>{props.titleOpening}</h2>
      <Style.timeBox>
        <p>{props.monday}</p>
        <p>{props.openMonday}</p>
      </Style.timeBox>
      <Style.timeBox>
        <p>{props.tuesday}</p>
        <p>{props.openTuesday}</p>
      </Style.timeBox>
      <Style.timeBox>
        <p>{props.wednesday}</p>
        <p>{props.openWednesday}</p>
      </Style.timeBox>
      <Style.timeBox>
        <p>{props.thursday}</p>
        <p>{props.openThursday}</p>
      </Style.timeBox>
      <Style.timeBox>
        <p>{props.friday}</p>
        <p>{props.openFriday}</p>
      </Style.timeBox>
      <Style.timeBox>
        <p>{props.saturday}</p>
        <p>{props.openSaturday}</p>
      </Style.timeBox>
      <Style.timeBox>
        <p>{props.sunday}</p>
        <p>{props.openSunday}</p>
      </Style.timeBox>

      <p>{props.infoOpening}</p>
    </Style.box>
  );
};

export default OpeningHours;
