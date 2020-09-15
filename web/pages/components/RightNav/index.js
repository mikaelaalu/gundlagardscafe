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
        <section>
          <a>{props.openingHours}</a>
        </section>
      </Link>
      <Link href="/findUs">
        <section>
          <a>{props.findUs}</a>
        </section>
      </Link>

      <Link href="/about">
        <section>
          <a>{props.about}</a>
        </section>
      </Link>

      <Link href="/">
        <Style.logoDesktop>
          <Style.logo src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
        </Style.logoDesktop>
      </Link>

      <Link href="/event">
        <section>
          <a>{props.event}</a>
        </section>
      </Link>
      <Link href="/catering">
        <section>
          <a>{props.catering}</a>
        </section>
      </Link>
      <Link href="/menu">
        <section>
          <a>{props.menu}</a>
        </section>
      </Link>
    </Style.ul>
  );
};

export default RightNav;
