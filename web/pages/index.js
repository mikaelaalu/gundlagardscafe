// import Menu from "./components/menu";
import groq from "groq";
import client from "../client";
import OpeningHours from "./components/OpeningHours";
import Menu from "./components/Menu";
import FindUs from "./components/FindUs";

const Index = (props) => {
  console.log(props);
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
  "findUs": (*[_type == 'findUs']),
  "event": (*[_type == 'event'])
}`;

Index.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default Index;
