import styled from "styled-components";
import { useState } from "react";
import imageUrlBuilder from "../imageUrlBuilder";
import PortableText from "@sanity/block-content-to-react";
import PageIcon from "./PageIcon";
import PageTitle from "./PageTitle";
import PageIntro from "./PageIntro";
import EventText from "./EventText";
import SingleEvent from "./EventSingle";

const EventSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 82%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 90%;
    /* flex-direction: row;
    justify-content: space-between; */
  }
`;

const Hej = styled.div`
  width: 200px;
  background-color: hotpink;
`;

const Event = ({ eventInformation, event, icon }) => {
  const IconSrc = icon.iconArray[12].iconImage.asset._ref;
  const IconAlt = icon.iconArray[12].iconAlt;
  const events = event;

  const [expanded, isExpanded] = useState(false);
  console.log(expanded);

  return (
    <EventSection>
      <TextWrapper>
        <div className="iconAndTitleContainer">
          <div className="iconAndTitleWrapper">
            <PageIcon src={imageUrlBuilder(IconSrc)} alt={IconAlt} />
            <PageTitle title={eventInformation.heading} />
          </div>
        </div>

        <PageIntro>
          <PortableText blocks={eventInformation.description} />
        </PageIntro>

        <button onClick={() => isExpanded(!expanded)}>Läs mer</button>

        <Hej>
          <p>hejhej</p>
        </Hej>

        {events.map((event, key) => (
          <EventText event={event} key={key} />
        ))}
      </TextWrapper>

      <EventsWrapper>
        {events.map((event, key) => (
          <SingleEvent event={event} key={key} />
        ))}
      </EventsWrapper>
    </EventSection>
  );
};

export default Event;
