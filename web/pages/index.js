// import Menu from "./components/menu";
import groq from "groq";
import client from "../client";
import OpeningHours from "./components/openingHours";
import Menu from "./components/menu";
import FindUs from "./components/findUs";

const Index = (props) => {
  console.log(props.findUs);
  return (
    <div>
      <p>Home!</p>
      <OpeningHours props={props.openingHours[0]} />
      <Menu props={props.menu} />
      <FindUs props={props.findUs} />
    </div>
  );
};

const query = groq`{
  "openingHours": (*[_type == 'openingHours']),
  "menu": (*[_type == 'menu']),
  "findUs": (*[_type == 'findUs'])
}`;

Index.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default Index;
