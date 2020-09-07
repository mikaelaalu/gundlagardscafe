import groq from "groq";
import client from "../client";
import OpeningHours from "./components/OpeningHours";
import Menu from "./components/Menu";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
const Index = (props) => {
  return (
    <div>
      <p>Home!</p>
      <OpeningHours props={props.openingHours[0]} />
      <Menu props={props.menu} />
      <FindUs props={props.findUs[0]} />
      <Footer props={props.footer[0]} />
    </div>
  );
};

const query = groq`{
  "openingHours": (*[_type == 'openingHours']),
  "menu": (*[_type == 'menu']),
  "findUs": (*[_type == 'findUs']),
  "footer": (*[_type == 'footer'])
}`;

Index.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default Index;
