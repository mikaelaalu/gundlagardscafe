import groq from "groq";
import client from "../client";
import Layout from "./components/Layout";
import StartPage from "./components/StartPage";
import InstagramFeed from "./components/InstagramFeed";
const Index = (props) => {
  return (
    <Layout props={props[0]}>
      <StartPage
        props={props[0].navigation[0]}
        icon={props[0].icon[0].iconArray[0]}
      />
      <InstagramFeed
        props={props[1]}
        title={props[0].navigation[0].instagram}
      />
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
