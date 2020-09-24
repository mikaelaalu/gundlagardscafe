import groq from "groq";
import client from "../client";
import Layout from "../components/Layout";
import StartPage from "../components/StartPage";
import InstagramFeed from "../components/InstagramFeed";
import { useState, useEffect } from "react";

const Index = (props) => {
  const [instaData, setInstaData] = useState("");

  useEffect(() => {
    fetch("https://www.instagram.com/gundlagardscafe/?__a=1")
      .then((resp) => resp.json())
      .then((json) => setInstaData(json));
  }, [0]);

  let imageArray = [];
  let username = "";
  let profilePic = "";
  if (instaData) {
    imageArray = instaData.graphql.user.edge_owner_to_timeline_media.edges;
    username = instaData.graphql.user.username;
    profilePic = instaData.graphql.user.profile_pic_url;
  }

  return (
    <Layout props={props}>

      <StartPage props={props.navigation[0]} icon={props.icon[0]} />
      <InstagramFeed
        props={imageArray}
        username={username}
        profilePic={profilePic}
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

export async function getStaticProps() {
  const props = await client.fetch(query);

  return {
    props: props,
  };
}

export default Index;
