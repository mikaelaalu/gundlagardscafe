import groq from "groq";
import client from "../../client";

const Post = (props) => {
  console.log(props[0]);
  console.log("slug js file");
  const eventDates = props[0].eventDates;
  console.log(eventDates);
  return (
    <article>
      <h1>{props[0].title || "slug"}</h1>
    </article>
  );
};

Post.getInitialProps = async function () {
  // It's important to default the slug so that it doesn't return "undefined"
  return await client.fetch(
    groq`
    *[_type == 'event']
  `
  );
};

export default Post;
