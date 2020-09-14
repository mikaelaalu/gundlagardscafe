import Style from "./style";
import imageUrlBuilder from "./../../../imageUrlBuilder";

const Footer = ({ props, logo }) => {
  const iconSrc = logo.iconImage.asset._ref;
  const iconAlt = logo.iconAlt;

  return (
    <Style.footer>
      <Style.logo src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
      <Style.box>
        <Style.title>{props.follow}</Style.title>
        <Style.a href={props.facebookLink}>{props.facebook}</Style.a>
        <Style.a href={props.instagramLink}>{props.instagram}</Style.a>
      </Style.box>

      <Style.box>
        <Style.title>{props.contact}</Style.title>
        <p>{props.mail}</p>
        <p>{props.number}</p>
        <p>{props.address}</p>
      </Style.box>
    </Style.footer>
  );
};

export default Footer;
