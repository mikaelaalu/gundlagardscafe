import Style from "./style";
import Link from "next/link";

const Navigation = ({ props }) => {
  return (
    <Style.container>
      {/* <img src={props.imageAbout.asset.ref}></img> */}
      <Style.title>{props.title}</Style.title>
      <Style.wrapper>
        <Link href="/openingHours">
          <Style.box>
            <Style.a>{props.openingHours}</Style.a>
          </Style.box>
        </Link>
        <Link href="/findUs">
          <Style.box>
            <Style.a>{props.findUs}</Style.a>
          </Style.box>
        </Link>
        <Link href="/about">
          <Style.box>
            <Style.a>{props.about}</Style.a>
          </Style.box>
        </Link>
        <Link href="/event">
          <Style.box>
            <Style.a>{props.event}</Style.a>
          </Style.box>
        </Link>
        <Link href="/catering">
          <Style.box>
            <Style.a>{props.catering}</Style.a>
          </Style.box>
        </Link>
        <Link href="/menu">
          <Style.box>
            <Style.a>{props.menu}</Style.a>
          </Style.box>
        </Link>
      </Style.wrapper>
    </Style.container>
  );
};

export default Navigation;
