import Style from "./style";
import imageUrlBuilder from "./../../../imageUrlBuilder";

const Footer = ({ props, icons }) => {
  const iconSrc = icons.iconArray[6].iconImage.asset._ref;
  const iconAlt = icons.iconArray[6].iconAlt;
  const facebookSrc = icons.iconArray[7].iconImage.asset._ref;
  const facebookAlt = icons.iconArray[7].iconAlt;
  const instagramSrc = icons.iconArray[8].iconImage.asset._ref;
  const instagramAlt = icons.iconArray[8].iconAlt;
  const mailSrc = icons.iconArray[9].iconImage.asset._ref;
  const mailAlt = icons.iconArray[9].iconAlt;
  const numberSrc = icons.iconArray[10].iconImage.asset._ref;
  const numberAlt = icons.iconArray[10].iconAlt;
  const addressSrc = icons.iconArray[11].iconImage.asset._ref;
  const addressAlt = icons.iconArray[11].iconAlt;

  return (
    <Style.footer>
      <Style.logo src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
      <Style.box>
        <Style.title>{props.follow}</Style.title>
        <Style.flex>
          <Style.icon src={imageUrlBuilder(facebookSrc)} alt={facebookAlt} />
          <Style.a href={props.facebookLink}>{props.facebook}</Style.a>
        </Style.flex>
        <Style.flex>
          <Style.icon src={imageUrlBuilder(instagramSrc)} alt={instagramAlt} />
          <Style.a href={props.instagramLink}>{props.instagram}</Style.a>
        </Style.flex>
      </Style.box>

      <Style.box>
        <Style.title>{props.contact}</Style.title>
        <Style.flex>
          <Style.icon src={imageUrlBuilder(mailSrc)} alt={mailAlt} />
          <p>{props.mail}</p>
        </Style.flex>
        <Style.flex>
          <Style.icon src={imageUrlBuilder(numberSrc)} alt={numberAlt} />
          <p>{props.number}</p>
        </Style.flex>
        <Style.flex>
          <Style.icon src={imageUrlBuilder(addressSrc)} alt={addressAlt} />
          <p>{props.address}</p>
        </Style.flex>
      </Style.box>
    </Style.footer>
  );
};

export default Footer;
