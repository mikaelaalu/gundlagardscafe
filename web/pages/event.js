import groq from "groq";
import client from "../client";
import Layout from "./components/Layout";
import EventIntro from "./components/EventIntro";
import Event from "./components/Event";
import EventForm from "./components/Forms/eventForm";

const EventPage = (props) => {
  const events = props.event;

  console.log(events);

  return (
    <Layout props={props}>
      <EventIntro props={props.eventInformation[0]} />

      {/* <Event title="Title" date="date" time="time" /> */}

      {events.map((event, key) => (
        <Event
          key={key}
          title={event.title}
          //   date={event.eventDates}
          /* src={item.image.asset._ref}  alt={event.imageAlt}*/
        />
      ))}

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

EventPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default EventPage;
