import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "./../../imageUrlBuilder";
import PageIcon from "./PageIcon";
import PageTitle from "./PageTitle";
import styled from "styled-components";

const CateringSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  width: 90%;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Info = styled.div`
  margin: 24px 0;
`;

const Catering = ({ catering, icon }) => {
  const IconSrc = icon.iconArray[0].iconImage.asset._ref;
  const IconAlt = icon.iconArray[0].iconAlt;

  return (
    <CateringSection>
      <TextWrapper>
        <div className="iconAndTitleContainer">
          <div className="iconAndTitleWrapper">
            <PageIcon src={imageUrlBuilder(IconSrc)} alt={IconAlt} />
            <PageTitle title={catering.titleCatering} /> 
          </div>
        </div>

        <Info>
          <PortableText blocks={catering.cateringInfo} />
        </Info>
      </TextWrapper>
    </CateringSection>
  );
};

export default Catering;
