import groq from "groq";
import client from "../client";
import FindUs from "./components/FindUs";
import Layout from "./components/Layout";

const FindUsPage = (props) => {
  return (
    <Layout props={props}>
      <FindUs findUs={props.findUs[0]} icon={props.icon[0]} />
    </Layout>
  );
};

const query = groq`{
    "findUs": (*[_type == 'findUs']),
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
export default FindUsPage;
