import Style from "./style";
import Link from "next/link";

const Navigation = ({ props }) => {
  return (
    <Style.container>
      {/* <img src={props.imageAbout.asset.ref}></img> */}
      <Style.title>{props.title}</Style.title>
      <Style.wrapper>
        <Style.box>
          <Link href="/openingHours">
            <a>{props.openingHours}</a>
          </Link>
        </Style.box>
        <Style.box>
          <Link href="/findUs">
            <a>{props.findUs}</a>
          </Link>
        </Style.box>
        <Style.box>
          <Link href="/about">
            <a>{props.about}</a>
          </Link>
        </Style.box>
        <Style.box>
          <Link href="/event">
            <a>{props.event}</a>
          </Link>
        </Style.box>
        <Style.box>
          <Link href="/catering">
            <a>{props.catering}</a>
          </Link>
        </Style.box>
        <Style.box>
          <Link href="/menu">
            <a>{props.menu}</a>
          </Link>
        </Style.box>
      </Style.wrapper>
    </Style.container>
  );
};

export default Navigation;
