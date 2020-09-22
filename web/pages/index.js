import groq from "groq";
import client from "../client";
import Layout from "../components/Layout";
import StartPage from "../components/StartPage";

const Index = (props) => {
  console.log({ props });
  return (
    <Layout props={props}>
      <StartPage props={props.navigation[0]} icon={props.icon[0]} />

      {/* <InstagramFeed
    //     props={props[1]}
    //     title={props[0].navigation[0].instagram}
    //   /> */}
    </Layout>
  );
};

const query = groq`{
  "openingHours": (*[_type == 'openingHours']),
  "menu": (*[_type == 'menu']),
  "findUs": (*[_type == 'findUs']),
  "event": (*[_type == 'event']),
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

export default Index;
