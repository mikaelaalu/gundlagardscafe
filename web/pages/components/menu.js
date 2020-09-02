import groq from "groq";
import client from "../../client";

const Menu = (props) => {
  console.log(props);
  return <h1>Hej</h1>;
};

Menu.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[]
      `),
});

export default Menu;
