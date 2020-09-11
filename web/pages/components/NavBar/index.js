import Link from "next/link";
import Style from "./style";
import Burger from "../Burger";

const NavBar = ({ props }) => {
  return (
    <Style.nav>
      <Style.logo>
        <Link href="/">
          <Style.logoMobile>LOGGAN</Style.logoMobile>
        </Link>
      </Style.logo>
      <Burger props={props} />
    </Style.nav>
  );
};

export default NavBar;
