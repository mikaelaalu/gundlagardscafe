import Style from "./style";
import Link from "next/link";

const Navigation = ({ props }) => {
  console.log(props);
  return (
    <Style.blackBorder>
      <Style.blackBorder>
        <Link href="/openingHours">
          <a>{props.openingHours}</a>
        </Link>
      </Style.blackBorder>
      <Style.blackBorder>
        <Link href="/findUs">
          <a>{props.findUs}</a>
        </Link>
      </Style.blackBorder>

      <Style.blackBorder>
        <Link href="/about">
          <a>{props.about}</a>
        </Link>
      </Style.blackBorder>
      <Style.blackBorder>
        <Link href="/event">
          <a>{props.event}</a>
        </Link>
      </Style.blackBorder>
      <Style.blackBorder>
        <Link href="/catering">
          <a>{props.catering}</a>
        </Link>
      </Style.blackBorder>
      <Style.blackBorder>
        <Link href="/menu">
          <a>{props.menu}</a>
        </Link>
      </Style.blackBorder>
    </Style.blackBorder>
  );
};

export default Navigation;
