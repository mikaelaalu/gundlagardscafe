import Style from "./style";
import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "../../../imageUrlBuilder";

const About = ({ props }) => {
  console.log("about component:");
  console.log(props);

  return (
    <Style.about>
      <Style.textWrapper>
        <h2>{props.titleAbout}</h2>
      </Style.textWrapper>
      <Style.textWrapper>
        <PortableText blocks={props.aboutText} />
      </Style.textWrapper>
      <Style.imageWrapper>
        <img
          src={imageUrlBuilder(props.image.asset._ref)}
          alt={props.imageAlt}
        />
      </Style.imageWrapper>
    </Style.about>
  );
};

export default About;
