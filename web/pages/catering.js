import groq from "groq";
import client from "../client";
import Layout from "./components/Layout";
import Catering from "./components/Catering";
import CateringForm from "./components/Forms/cateringForm";
import PageTitle from "./components/PageTitle";
import PortableText from "@sanity/block-content-to-react";
import PageIntro from "./components/PageIntro";

const CateringPage = (props) => {
  return (
    <Layout props={props}>
      {/* <div className="textContent">
        <PageTitle title={props.catering[0].titleCatering} />
        <PageIntro>
          <PortableText blocks={props.catering[0].cateringInfo} />
        </PageIntro>
      </div> */}

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

CateringPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default CateringPage;
