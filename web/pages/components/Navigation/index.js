import Style from "./style";
import Link from "next/link";
import imageUrlBuilder from "../../../imageUrlBuilder";

const Navigation = ({ props, icon }) => {
  const iconSrc = icon.iconImage.asset._ref;
  const iconAlt = icon.iconAlt;

  return (
    <Style.container>
      <Style.icon src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
      <Style.title>{props.title}</Style.title>
      <Style.wrapper>
        <Link href="/openingHours">
          <Style.box img={imageUrlBuilder(props.imageOpeningHours.asset._ref)}>
            <Style.a>{props.openingHours}</Style.a>
          </Style.box>
        </Link>
        <Link href="/findUs">
          <Style.box img={imageUrlBuilder(props.imageFindUs.asset._ref)}>
            <Style.a>{props.findUs}</Style.a>
          </Style.box>
        </Link>
        <Link href="/about">
          <Style.box img={imageUrlBuilder(props.imageAbout.asset._ref)}>
            <Style.a>{props.about}</Style.a>
          </Style.box>
        </Link>
        <Link href="/event">
          <Style.box img={imageUrlBuilder(props.imageEvent.asset._ref)}>
            <Style.a>{props.event}</Style.a>
          </Style.box>
        </Link>
        <Link href="/catering">
          <Style.box img={imageUrlBuilder(props.imageCatering.asset._ref)}>
            <Style.a>{props.catering}</Style.a>
          </Style.box>
        </Link>
        <Link href="/menu">
          <Style.box img={imageUrlBuilder(props.imageMeny.asset._ref)}>
            <Style.a>{props.menu}</Style.a>
          </Style.box>
        </Link>
      </Style.wrapper>
    </Style.container>
  );
};

export default Navigation;
