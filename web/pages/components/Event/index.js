import Style from "./style";
import imageUrlBuilder from "../../../imageUrlBuilder";
import PortableText from "@sanity/block-content-to-react";
import PageIcon from "../PageIcon";
import PageTitle from "../PageTitle";
import PageIntro from "../PageIntro";
import EventText from "../EventText";
import SingleEvent from "../EventSingle";
import { useState } from "react";

const Event = ({ eventInformation, event, icon }) => {
  const IconSrc = icon.iconArray[12].iconImage.asset._ref;
  const IconAlt = icon.iconArray[12].iconAlt;
  const events = event;

  const [expanded, isExpanded] = useState(false);
  console.log(expanded);

  return (
    <Style.event>
      <Style.textWrapper>
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

        <Style.hej>
          <p>hejhej</p>
        </Style.hej>

        {events.map((event, key) => (
          <EventText event={event} key={key} />
        ))}
      </Style.textWrapper>

      <Style.eventsWrapper>
        {events.map((event, key) => (
          <SingleEvent event={event} key={key} />
        ))}
      </Style.eventsWrapper>
    </Style.event>
  );
};

export default Event;
