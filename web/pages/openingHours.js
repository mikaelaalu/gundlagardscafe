import groq from "groq";
import client from "../client";
import OpeningHours from "./components/OpeningHours";
import Layout from "./components/Layout";

const OpeningHoursPage = (props) => {
  return (
    <Layout props={props}>
      <OpeningHours props={props.openingHours[0]} />
    </Layout>
  );
};

const query = groq`{
  "openingHours": (*[_type == 'openingHours']),
  "footer": (*[_type == 'footer'])
}`;

OpeningHoursPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default OpeningHoursPage;