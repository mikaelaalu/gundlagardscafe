import groq from "groq";
import client from "../client";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import InstagramFeed from "./components/InstagramFeed";
const Index = (props) => {
  console.log(props);
  return (
    <Layout props={props[0]}>
      <Navigation props={props[0].navigation[0]} />
      <InstagramFeed props={props[1]} />
    </Layout>
  );
};

const query = groq`{
  "openingHours": (*[_type == 'openingHours']),
  "menu": (*[_type == 'menu']),
  "findUs": (*[_type == 'findUs']),
  "event": (*[_type == 'event']),
  "footer": (*[_type == 'footer']),
  "navigation": (*[_type== 'navigation'])
}`;

Index.getInitialProps = async function () {
  const res = await client.fetch(query);
  const instagram = await fetch(
    "https://www.instagram.com/gundlagardscafe/?__a=1"
  );

  const json = await instagram.json();

  const data = [res, json];
  return data;
};

export default Index;
