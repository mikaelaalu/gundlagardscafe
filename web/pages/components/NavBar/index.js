import Link from "next/link";
import Style from "./style";
import Burger from "../Burger";

const NavBar = ({ props }) => {
  return (
    <>
      <Style.nav>
        <Style.logo>
          <Link href="/">
            <Style.logoMobile>logga mobile</Style.logoMobile>
          </Link>
        </Style.logo>
        <Burger props={props} />
      </Style.nav>
      <Style.margin />
    </>
  );
};

export default NavBar;
