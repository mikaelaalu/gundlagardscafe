import groq from "groq";
import client from "../client";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";

const Index = (props) => {
  console.log(props);
  // console.log(props.frontPage[0]);
  return (
    <Layout props={props}>
      <Navigation props={props.frontPage[0]} />
    </Layout>
  );
};

const query = groq`{
  "openingHours": (*[_type == 'openingHours']),
  "menu": (*[_type == 'menu']),
  "findUs": (*[_type == 'findUs']),
  "event": (*[_type == 'event']),
  "footer": (*[_type == 'footer']),
  "frontPage": (*[_type== 'frontPage'])
}`;

Index.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default Index;
