import groq from "groq";
import client from "../client";
import FindUs from "./components/FindUs";
import Layout from "./components/Layout";

const CateringPage = (props) => {
  return (
    <Layout props={props}>
      <h1>Catering </h1>
      <p>
        Heeeeeeejidsvsdnjvndaf vn njdasnck nj dsn vadmnklcx'vdnjvfvf
        Heeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvfHeeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvfHeeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvfHeeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvfHeeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvfHeeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvfHeeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvf Heeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvfHeeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvfHeeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvfHeeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvfHeeeeeeejidsvsdnjvndaf vn njdasnck nj dsn
        vadmnklcx'vdnjvfvf
      </p>
    </Layout>
  );
};

const query = groq`{
    "footer": (*[_type == 'footer']),
    "navigation": (*[_type== 'navigation'])
  }`;

CateringPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default CateringPage;
