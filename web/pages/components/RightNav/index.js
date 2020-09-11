import Link from "next/link";
import Style from "./style";

const RightNav = ({ props, open }) => {
  return (
    <Style.ul open={open}>
      <Link href="/openingHours">
        <a>{props.openingHours}</a>
      </Link>
      <Link href="/findUs">
        <a>{props.findUs}</a>
      </Link>

      <Link href="/about">
        <a>{props.about}</a>
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