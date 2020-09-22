import groq from "groq";
import client from "../client";
import Menu from "../components/Menu";
import Layout from "../components/Layout";

const MenuPage = (props) => {
  return (
    <Layout props={props}>
      <Menu menu={props.menu[0]} icon={props.icon[0]} />
    </Layout>
  );
};

const query = groq`{
  "menu": (*[_type == 'menu']),
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

export default MenuPage;
