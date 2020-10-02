import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";

const TextWrapper = styled.div`
  width: 90%;

  h3 {
    font-weight: bold;

    @media (min-width: 768px) {
      margin: 0px;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    padding: 0 20px 20px 20px;
  }
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
