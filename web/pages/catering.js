import groq from "groq";
import client from "../client";
import FindUs from "./components/FindUs";
import Layout from "./components/Layout";
import CateringEventForm from "./components/CateringEventForm";
import PageTitle from "./components/PageTitle";
import PortableText from "@sanity/block-content-to-react";
import PageIntro from "./components/PageIntro";

const CateringPage = (props) => {
  console.log(props);
  return (
    <Layout props={props}>
      <PageTitle title={props.catering[0].titleCatering} />
      <PageIntro>
        <PortableText blocks={props.catering[0].cateringInfo} />{" "}
      </PageIntro>
      <CateringEventForm />
    </Layout>
  );
};

const query = groq`{
    "footer": (*[_type == 'footer']),
    "navigation": (*[_type == 'navigation']),
    'catering': (*[_type == 'catering'])
  }`;

CateringPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default CateringPage;
