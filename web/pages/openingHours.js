import groq from "groq";
import client from "../client";
import OpeningHours from "./components/OpeningHours";
import Layout from "./components/Layout";

const OpeningHoursPage = (props) => {
  return (
    <Layout props={props}>
      <OpeningHours
        props={props.openingHours[0]}
        icon={props.icon[0].iconArray[0]}
      />
    </Layout>
  );
};

const query = groq`{
  "openingHours": (*[_type == 'openingHours']),
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

export default OpeningHoursPage;
