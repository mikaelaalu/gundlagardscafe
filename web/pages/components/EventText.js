import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";

const TextWrapper = styled.div`
  width: 90%;
`;

const EventText = ({ event }) => {
  return (
    <TextWrapper>
      <h3>{event.title}</h3>
      <PortableText blocks={event.description} />
    </TextWrapper>
  );
};

export default EventText;
