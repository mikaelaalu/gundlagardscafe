import groq from "groq";
import client from "../client";
import Layout from "./components/Layout";
import About from "./components/About";
import PageIcon from "./components/PageIcon";
import imageUrlBuilder from "../imageUrlBuilder";

const AboutPage = (props) => {
  console.log("about page:");
  console.log(props);

  return (
    <Layout props={props}>
      <About about={props.about[0]} icon={props.icon[0]} /> 
    </Layout>
  );
};

const query = groq`{
  "footer": (*[_type == 'footer']),
  "about": (*[_type == 'about']),
  "navigation": (*[_type== 'navigation']),
  "icon": (*[_type == 'icon']),
}`;

AboutPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default AboutPage;
