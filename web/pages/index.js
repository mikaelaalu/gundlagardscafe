import Menu from "./components/menu";
import groq from "groq";
import client from "../client";

const Index = (props) => {
  // const { title = "" } = props;
  console.log(props);
  console.log(props[0].menuText[0].children[0].text);
  console.log("index.js file not working");

  return (
    <div>
      <p>Home!</p>
      <Menu />
    </div>
  );
};

const query = groq`*`;

Index.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default Index;
