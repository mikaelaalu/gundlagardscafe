import Style from "./style";
import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "../../../imageUrlBuilder";
import PageIcon from "../PageIcon";
import PageIntro from "../PageIntro";
import PageTitle from "../PageTitle";
import PageImage from "../PageImage";

const About = ({ about, icon }) => {
  const IconSrc = icon.iconArray[1].iconImage.asset._ref;
  const IconAlt = icon.iconArray[1].iconAlt;
  console.log(icon);

  return (
    <Style.about> 
      <div className="textContent">
        <div className="iconAndTitleContainer">
          <div className="iconAndTitleWrapper">
            <PageIcon src={imageUrlBuilder(IconSrc)} alt={IconAlt} />
            <PageTitle title={about.titleAbout} />
          </div>
        </div>

        <PageIntro>
          <PortableText blocks={about.aboutText} />
        </PageIntro>
      </div>

      <PageImage
        src={imageUrlBuilder(about.image.asset._ref)}
        alt={about.imageAlt}
      />
    </Style.about>
  );
};

export default About;
