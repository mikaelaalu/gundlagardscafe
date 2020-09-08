import groq from "groq";
import client from "../client";
import Layout from "./components/Layout";
import About from "./components/About";

const AboutPage = (props) => {
  console.log("about" + props);
  return (
    <Layout props={props}>
      <About props={props.about[0]} />
    </Layout>
  );
};

const query = groq`{
  "footer": (*[_type == 'footer']),
  "about": (*[_type == 'about'])
}`;

AboutPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default AboutPage;
 