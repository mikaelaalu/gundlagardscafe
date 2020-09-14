import Link from "next/link";
import Style from "./style";
import imageUrlBuilder from "./../../../imageUrlBuilder";

const RightNav = ({ props, open, setOpen, logoDesktop }) => {
  const iconSrc = logoDesktop.iconImage.asset._ref;
  const iconAlt = logoDesktop.iconAlt;
  return (
    <Style.ul open={open}>
      <Style.exit onClick={() => setOpen(!open)}>
        <Style.crossOne></Style.crossOne>
        <Style.crossTwo></Style.crossTwo>
      </Style.exit>
      <Link href="/openingHours">
        <a>{props.openingHours}</a>
      </Link>
      <Link href="/findUs">
        <a>{props.findUs}</a>
      </Link>

      <Link href="/about">
        <a>{props.about}</a>
      </Link>

      <Link href="/">
        <Style.logoDesktop>
          <Style.logo src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
        </Style.logoDesktop>
      </Link>

      <Link href="/event">
        <a>{props.event}</a>
      </Link>
      <Link href="/catering">
        <a>{props.catering}</a>
      </Link>
      <Link href="/menu">
        <a>{props.menu}</a>
      </Link>
    </Style.ul>
  );
};

export default RightNav;
