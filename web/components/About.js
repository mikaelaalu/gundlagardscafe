import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "../imageUrlBuilder";
import PageIcon from "./PageIcon";
import PageTitle from "./PageTitle";
import PageIntro from "./PageIntro";
import PageImage from "./PageImage";
import styled from "styled-components";

const AboutSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 0 50px;
  }
`;

const AboutTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex: 0.9;
    max-width: 400px;
    margin-right: 80px;
  }
`;

const About = ({ about, icon }) => {
  const IconSrc = icon.iconArray[1].iconImage.asset._ref;
  const IconAlt = icon.iconArray[1].iconAlt;
  console.log(about);

  return (
    <AboutSection>
      <AboutTextWrapper>
        <div className="iconAndTitleContainer">
          <div className="iconAndTitleWrapper">
            <PageIcon src={imageUrlBuilder(IconSrc)} alt={IconAlt} />
            <PageTitle title={about.titleAbout} />
          </div>
        </div>

        <PageIntro>
          <PortableText blocks={about.aboutText} />
        </PageIntro>
      </AboutTextWrapper>

      <PageImage
        src={imageUrlBuilder(about.image.asset._ref)}
        alt={about.imageAlt}
      />
    </AboutSection>
  );
};

export default About;
