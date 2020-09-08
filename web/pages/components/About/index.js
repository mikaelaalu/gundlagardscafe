import Style from "./style";
import PortableText from "@sanity/block-content-to-react";

const About = ({ props }) => {
  console.log("about comp" + props);
  return (
    <div>
      <h2>{props.titleAbout}</h2>
      <PortableText blocks={props.findUsText[0]} />
      {/* <img src={props.image.asset._ref} alt={props.imageAlt} /> */}
    </div>
  );
};

export default About;
