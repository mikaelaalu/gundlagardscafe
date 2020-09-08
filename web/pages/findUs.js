import groq from "groq";
import client from "../client";
import FindUs from "./components/FindUs";
import Layout from "./components/Layout";

const FindUsPage = (props) => {
  return (
    <Layout props={props}>
      <FindUs props={props.findUs[0]} />
    </Layout>
  );
};

const query = groq`{
    "findUs": (*[_type == 'findUs']),
    "footer": (*[_type == 'footer'])
  }`;

FindUsPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default FindUsPage;