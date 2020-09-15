import Style from "./style";
import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "../../../imageUrlBuilder";
import PageIcon from "../PageIcon";
import PageTitle from "../PageTitle";
import PageIntro from "../PageIntro";

const FindUs = ({ findUs, icon }) => {
  const IconSrc = icon.iconArray[1].iconImage.asset._ref;
  const IconAlt = icon.iconArray[1].iconAlt;

  return (
    <Style.findUs>
      <div className="textContent">
        <PageIcon src={imageUrlBuilder(IconSrc)} alt={IconAlt} />
        <PageTitle title={findUs.titleFindUs} />

        <PageIntro>
          <PortableText blocks={findUs.findUsText} />
        </PageIntro>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8531.469422828082!2d12.037056784945225!3d57.68473266716339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3e0a56aa6e3%3A0x7eaec54e3a995183!2zRGVsc2rDtm4!5e0!3m2!1ssv!2sse!4v1599477645995!5m2!1ssv!2sse"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </Style.findUs>
  );
};

export default FindUs;
