import groq from "groq";
import client from "../client";
import OpeningHours from "./components/OpeningHours";
import Menu from "./components/Menu";
import FindUs from "./components/FindUs";
import Layout from "./components/Layout";
const MenuPage = (props) => {
  return (
    <Layout props={props}>
      <Menu props={props.menu} />
    </Layout>
  );
};

const query = groq`{
  "menu": (*[_type == 'menu']),
  "footer": (*[_type == 'footer'])
}`;

MenuPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default MenuPage;
