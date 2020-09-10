import Style from "./style";
import PortableText from "@sanity/block-content-to-react";
import imageUrlBuilder from "../../../imageUrlBuilder";

const Menu = ({ props }) => {
  console.log(props);
  return (
    <Style.menu>
      <Style.textContent>
        <Style.textWrapper>
          <h2 className="pageTitle">{props.titleMenu}</h2>
        </Style.textWrapper>
        <Style.textWrapper>
          <PortableText blocks={props.menuText} />
        </Style.textWrapper>
      </Style.textContent>
      <Style.imageWrapper>
        <img
          src={imageUrlBuilder(props.image.asset._ref)}
          alt={props.imageAlt}
        />
      </Style.imageWrapper>
    </Style.menu>
  );
};

export default Menu;
