import groq from "groq";
import client from "../client";
import Layout from "./components/Layout";
import Catering from "./components/Catering";
import CateringForm from "./components/CateringForm";

const CateringPage = (props) => {
  return (
    <Layout props={props}>
      <Catering catering={props.catering[0]} icon={props.icon[0]} />
      <CateringForm />
    </Layout>
  );
};

const query = groq`{
    "footer": (*[_type == 'footer']),
    "navigation": (*[_type == 'navigation']),
    'catering': (*[_type == 'catering']),
    "icon": (*[_type == 'icon']),
  }`;

export async function getStaticProps() {
  const props = await client.fetch(query);

  return {
    props: props,
  };
}

export default CateringPage;
