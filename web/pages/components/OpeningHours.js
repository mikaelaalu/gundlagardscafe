import styled from "styled-components";
import imageUrlBuilder from "./../../imageUrlBuilder";
import PageTitle from "./PageTitle";

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-top: 10px;
  }
`;

const TimeBox = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin-top: 20px;
`;

const Icon = styled.img`
  width: 60px;
  height: 50px;
`;

const InfoText = styled.p`
  margin-top: 34px;
  padding-bottom: 85px;
`;

const OpeningHours = ({ props, icon }) => {
  const iconSrc = icon.iconImage.asset._ref;
  const iconAlt = icon.iconAlt;

  return (
    <div className="textContent">
      <Icon src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
      <Box>
        <PageTitle title={props.titleOpening} />
        <TimeBox>
          <p>{props.monday}</p>
          <p>{props.openMonday}</p>
        </TimeBox>
        <TimeBox>
          <p>{props.tuesday}</p>
          <p>{props.openTuesday}</p>
        </TimeBox>
        <TimeBox>
          <p>{props.wednesday}</p>
          <p>{props.openWednesday}</p>
        </TimeBox>
        <TimeBox>
          <p>{props.thursday}</p>
          <p>{props.openThursday}</p>
        </TimeBox>
        <TimeBox>
          <p>{props.friday}</p>
          <p>{props.openFriday}</p>
        </TimeBox>
        <TimeBox>
          <p>{props.saturday}</p>
          <p>{props.openSaturday}</p>
        </TimeBox>
        <TimeBox>
          <p>{props.sunday}</p>
          <p>{props.openSunday}</p>
        </TimeBox>

        <InfoText>{props.infoOpening}</InfoText>
      </Box>
    </div>
  );
};

export default OpeningHours;
