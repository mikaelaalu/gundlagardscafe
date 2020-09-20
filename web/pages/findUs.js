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

FindUsPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default FindUsPage;
