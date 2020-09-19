import Style from "./style";
import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "../../../imageUrlBuilder";
import PageIcon from "../PageIcon";
import PageTitle from "../PageTitle";

const Catering = ({ catering, icon }) => {
  const IconSrc = icon.iconArray[0].iconImage.asset._ref;
  const IconAlt = icon.iconArray[0].iconAlt;

  return (
    <Style.catering>
      <Style.textWrapper>
        <div className="iconAndTitleContainer">
          <div className="iconAndTitleWrapper">
            <PageIcon src={imageUrlBuilder(IconSrc)} alt={IconAlt} />
            <PageTitle title={catering.titleCatering} />
          </div>
        </div>

        <Style.info>
          <PortableText blocks={catering.cateringInfo} />
        </Style.info>
      </Style.textWrapper>
    </Style.catering>
  );
};

export default Catering;
