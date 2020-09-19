import Style from "./style";
import PortableText from "@sanity/block-content-to-react";

const EventText = ({ event }) => {
  return (
    <Style.textWrapper>
      <h3>{event.title}</h3>
      <PortableText blocks={event.description} />
    </Style.textWrapper>
  );
};

export default EventText;
