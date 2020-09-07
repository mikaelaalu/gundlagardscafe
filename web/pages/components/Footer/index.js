import Style from "./style";

const Footer = ({ props }) => {
  return (
    <Style.footer>
      <p>{props.backToTop}</p>
      <p>{props.infoText}</p>
      <h5>{props.contact}</h5>
      <p>{props.mail}</p>
      <p>{props.number}</p>
      <h5>{props.follow}</h5>
      <a href={props.facebookLink}>{props.facebook}</a>
      <a href={props.instagramLink}>{props.instagram}</a>
      <p>{props.address}</p>
    </Style.footer>
  );
};

export default Footer;
