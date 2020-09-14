import Link from "next/link";
import Style from "./style";
import Burger from "../Burger";
import imageUrlBuilder from "./../../../imageUrlBuilder";

const NavBar = ({ props, logoMobile, logoDesktop }) => {
  const iconSrc = logoMobile.iconImage.asset._ref;
  const iconAlt = logoMobile.iconAlt;

  return (
    <>
      <Style.nav>
        <Style.logo>
          <Link href="/">
            <Style.logoMobile>
              <Style.icon src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
            </Style.logoMobile>
          </Link>
        </Style.logo>
        <Burger props={props} logoDesktop={logoDesktop} />
      </Style.nav>
      <Style.margin />
    </>
  );
};

export default NavBar;
