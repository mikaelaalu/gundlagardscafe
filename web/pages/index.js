// import Menu from "./components/menu";
import groq from "groq";
import client from "../client";
import OpeningHours from "./components/openingHours";
import Menu from "./components/menu";

const Index = (props) => {
  return (
    <div>
      <p>Home!</p>
      <OpeningHours props={props.OpeningHours[0]} />
      <Menu props={props.Menu} />
    </div>
  );
};

const query = groq`{
  "OpeningHours": (*[_type == 'openinghours']),
  "Menu": (*[_type == 'menu'])
}`;

Index.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default Index;
