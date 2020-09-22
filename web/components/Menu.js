import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "./../../imageUrlBuilder";
import PageIcon from "./PageIcon";
import PageTitle from "./PageTitle";
import PageIntro from "./PageIntro";
import PageImage from "./PageImage";
import styled from "styled-components";

const MenuSection = styled.section`
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

const MenuTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    /* width: 50%; */
    flex: 1;
    max-width: 400px;
    margin-right: 80px;
  }
`;

const Menu = ({ menu, icon }) => {
  const IconSrc = icon.iconArray[3].iconImage.asset._ref;
  const IconAlt = icon.iconArray[3].iconAlt;

  return (
    <MenuSection>
      <MenuTextWrapper>
        <div className="iconAndTitleContainer">
          <div className="iconAndTitleWrapper">
            <PageIcon src={imageUrlBuilder(IconSrc)} alt={IconAlt} />
            <PageTitle title={menu.titleMenu} />
          </div>
        </div>

        <PageIntro>
          <PortableText blocks={menu.menuText} />
        </PageIntro>
      </MenuTextWrapper>

      <PageImage
        src={imageUrlBuilder(menu.image.asset._ref)}
        alt={menu.imageAlt}
      />
    </MenuSection>
  );
};

export default Menu;
