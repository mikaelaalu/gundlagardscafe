import groq from "groq";
import client from "../client";
import Menu from "./components/Menu";
import Layout from "./components/Layout";

const MenuPage = (props) => {
  return (
    <Layout props={props}>
      <Menu props={props.menu[0]} />
    </Layout>
  );
};

const query = groq`{
  "menu": (*[_type == 'menu']),
  "footer": (*[_type == 'footer']),
  "navigation": (*[_type== 'navigation'])
}`;

MenuPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default MenuPage;
