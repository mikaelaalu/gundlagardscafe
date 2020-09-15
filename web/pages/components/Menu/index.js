import Style from "./style";
import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "../../../imageUrlBuilder";
import PageIcon from "../PageIcon";
import PageTitle from "../PageTitle";
import PageIntro from "../PageIntro";
import PageImage from "../PageImage";

const Menu = ({ menu, icon }) => {
  const IconSrc = icon.iconArray[3].iconImage.asset._ref;
  const IconAlt = icon.iconArray[3].iconAlt;

  return (
    <Style.menu>
      <div className="iconAndTitleContainer">
        <div className="iconAndTitleWrapper">
          <PageIcon src={imageUrlBuilder(IconSrc)} alt={IconAlt} />
          <PageTitle title={menu.titleMenu} />
        </div>
      </div>

      <PageIntro>
        <PortableText blocks={menu.menuText} />
      </PageIntro>

      <PageImage
        src={imageUrlBuilder(menu.image.asset._ref)}
        alt={menu.imageAlt}
      />
    </Style.menu>
  );
};

export default Menu;
