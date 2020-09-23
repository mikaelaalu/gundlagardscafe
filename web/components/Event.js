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

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 85%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 28%;
  }

  img {
    @media (min-width: 768px) {
      width: 50px;
      height: auto;
    }
  }
`;

const About = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex: 0.95;
    margin-top: 153px;
  }
`;

const ReadMore = styled.div`
  width: 90%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  button {
    all: unset;
    color: var(--white);
    font-size: 18px;
    text-decoration: underline;
    margin-right: 8px;
  }

  div {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: ${({ opened }) =>
      opened ? "rotate(-45deg)" : "rotate(135deg)"};
    margin-bottom: ${({ opened }) => (opened ? "0px" : "6px")};
    transition: transform ease 0.2s;
  }
`;

const EventTextWrapper = styled.div`
  width: 90%;
  max-height: ${({ expanded }) => (expanded ? "2000px" : "0px")};
  transform: ${({ expanded }) => (expanded ? "scaleY(1)" : "scaleY(0)")};
  transition: all ease-in 0.5s;
  transform-origin: top;

  @media (min-width: 768px) {
    width: 100%;
    max-height: 1000px;
    transform: scaleY(1);
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid var(--white);
    padding: 20px;
  }
`;

const EventsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 82%;
    margin-top: 100px;
    margin-bottom: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Event = ({ eventInformation, event, icon }) => {
  const IconSrc = icon.iconArray[12].iconImage.asset._ref;
  const IconAlt = icon.iconArray[12].iconAlt;
  const events = event;

  const [expanded, isExpanded] = useState(false);
  const [opened, isOpened] = useState(false);

  const onC = (e) => {
    e.preventDefault();
    isExpanded(!expanded);
    isOpened(!opened);
  };

  return (
    <EventSection>
      <TextWrapper>
        <Intro>
          <div className="iconAndTitleContainer">
            <div className="iconAndTitleWrapper">
              <PageIcon src={imageUrlBuilder(IconSrc)} alt={IconAlt} />
              <PageTitle title={eventInformation.heading} />
            </div>
          </div>

          <PageIntro>
            <PortableText blocks={eventInformation.description} />
          </PageIntro>
        </Intro>

        <About>
          <ReadMore onClick={onC} opened={opened}>
            <button>{opened ? "Läs mindre" : "Läs mer"}</button>
            <div></div>
          </ReadMore>

          <EventTextWrapper expanded={expanded}>
            {events.map((event, key) => (
              <EventText event={event} key={key} />
            ))}
          </EventTextWrapper>
        </About>
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
