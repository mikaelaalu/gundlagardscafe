import Style from "./style";

const Footer = ({ props }) => {
  return (
    <Style.footer>
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
