import styled from "styled-components";
import imageUrlBuilder from "../imageUrlBuilder";
import PageTitle from "./PageTitle";

const OpeningHoursSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: auto;
  background-color: var(--light-black);

  @media (min-width: 768px) {
    width: 90px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-top: 10px;

    @media (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;

const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  p:first-child {
    margin-right: 48px;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  margin-top: 34px;
`;

const OpeningHours = ({ props, icon }) => {
  const iconSrc = icon.iconImage.asset._ref;
  const iconAlt = icon.iconAlt;

  return (
    <OpeningHoursSection>
      <IconWrapper>
        <img src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
      </IconWrapper>

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
    </OpeningHoursSection>
  );
};

export default OpeningHours;
