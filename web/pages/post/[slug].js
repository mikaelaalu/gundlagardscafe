import groq from "groq";
import client from "../../client";

const Post = (props) => {
  const { title = "" } = props;
  console.log(props);
  console.log("slug js file");
  return (
    <article>
      <h1>{title || "slug"}</h1>
    </article>
  );
};

Post.getInitialProps = async function () {
  // It's important to default the slug so that it doesn't return "undefined"
  return await client.fetch(
    groq`
    *
  `
  );
};

export default Post;
