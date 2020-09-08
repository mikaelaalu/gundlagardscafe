import groq from "groq";
import client from "../client";
import OpeningHoursComp from "./components/OpeningHours";
import Menu from "./components/Menu";
import FindUs from "./components/FindUs";
import Layout from "./components/Layout";
const OpeningHours = (props) => {
  return (
    <Layout props={props}>
      <p>Home!</p>
      <OpeningHoursComp props={props.openingHours[0]} />
    </Layout>
  );
};

const query = groq`{
  "openingHours": (*[_type == 'openingHours']),
  "footer": (*[_type == 'footer'])
}`;

OpeningHours.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default OpeningHours;
