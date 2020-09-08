import groq from "groq";
import client from "../client";
import Layout from "./components/Layout";
import EventIntro from "./components/EventIntro";
import Event from "./components/Event";

const EventPage = (props) => {
  console.log(props);

  // EventIntro
  const heading = props.eventInformation[0].heading;
  const description = props.eventInformation[0].description;

  const events = props.event;
  console.log(events);

  return (
    <Layout props={props}>
      <EventIntro heading={heading} intro={description} />

      {/* <Event title="Title" date="date" time="time" /> */}

      {events.map((event, key) => (
        <Event
          key={key}
          title={event.title}
          /* src={item.image.asset._ref} */ alt={event.imageAlt}
        />
      ))}
    </Layout>
  );
};

const query = groq`{
    "eventInformation": (*[_type == 'eventInformation']),
    "event": (*[_type == 'event']),
    "footer": (*[_type == 'footer']),
  }`;

EventPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default EventPage;

// Next.js comes with a special function called getInitialProps that is called and returns props to the react component before rendering the templates in /pages.
// This is a perfect place for fetching the data you want for a page.
