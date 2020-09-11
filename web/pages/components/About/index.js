import Style from "./style";
import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "../../../imageUrlBuilder";
import PageIntro from "../PageIntro";
import PageTitle from "../PageTitle";
import PageIcon from "../PageIcon";

const About = ({ props }) => {
  return (
    <Style.about>
      <div className="textContent">
        <PageTitle title={props.titleAbout} />

        <PageIntro>
          <PortableText blocks={props.aboutText} />
        </PageIntro>
      </div>

      <PageIcon
        src={imageUrlBuilder(props.image.asset._ref)}
        alt={props.imageAlt}
      />

      {/* <Style.imageWrapper>
        <img
          src={imageUrlBuilder(props.image.asset._ref)}
          alt={props.imageAlt}
        />
      </Style.imageWrapper> */}
    </Style.about>
  );
};

export default About;
