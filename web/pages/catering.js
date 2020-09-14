import groq from "groq";
import client from "../client";
import FindUs from "./components/FindUs";
import Layout from "./components/Layout";
import CateringForm from "./components/Forms/cateringForm";
import PageTitle from "./components/PageTitle";
import PortableText from "@sanity/block-content-to-react";
import PageIntro from "./components/PageIntro";

const CateringPage = (props) => {
  return (
    <Layout props={props}>
      <div className="textContent">
        <PageTitle title={props.catering[0].titleCatering} />
        <PageIntro>
          <PortableText blocks={props.catering[0].cateringInfo} />{" "}
        </PageIntro>
      </div>
      <CateringForm />
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
