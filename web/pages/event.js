import groq from "groq";
import client from "../client";
import Layout from "../components/Layout";
import Event from "../components/Event";
import EventForm from "../components/EventForm";

const EventPage = (props) => {
  return (
    <Layout props={props}>
      <Event
        eventInformation={props.eventInformation[0]}
        event={props.event}
        icon={props.icon[0]}
      />
      <EventForm />
    </Layout>
  );
};

const query = groq`{
    "eventInformation": (*[_type == 'eventInformation']),
    "event": (*[_type == 'event']),
    "footer": (*[_type == 'footer']),
    "navigation": (*[_type== 'navigation']),
    "icon": (*[_type == 'icon']),
  }`;

export async function getStaticProps() {
  const props = await client.fetch(query);

  return {
    props: props,
  };
}

export default EventPage;
