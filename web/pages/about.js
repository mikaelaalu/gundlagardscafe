import groq from "groq";
import client from "../client";
import Layout from "../components/Layout";
import About from "../components/About";

const AboutPage = (props) => {
  return (
    <Layout props={props}>
      <About about={props.about[0]} icon={props.icon[0]} />
    </Layout>
  );
};

export async function getStaticProps() {
  const query = groq`{
    "footer": (*[_type == 'footer']),
    "about": (*[_type == 'about']),
    "navigation": (*[_type== 'navigation']),
    "icon": (*[_type == 'icon']),
  }`;
  const props = await client.fetch(query);

  return {
    props: props,
  };
}

export default AboutPage;
