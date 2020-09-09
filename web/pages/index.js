import groq from "groq";
import client from "../client";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";

const Index = (props) => {
  // console.log(props);

  return (
    <Layout props={props}>
      <Navigation props={props.navigation[0]} />
    </Layout>
  );
};

const query = groq`{
  "openingHours": (*[_type == 'openingHours']),
  "menu": (*[_type == 'menu']),
  "findUs": (*[_type == 'findUs']),
  "event": (*[_type == 'event']),
  "footer": (*[_type == 'footer']),
  "navigation": (*[_type== 'navigation'])
}`;

Index.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default Index;
