import Link from "next/link";
import Footer from "../Footer";
import Style from "./style";
import NavBar from "../NavBar";

const Layout = ({ children, props }) => {
  //Hamburger menu in here?

  return (
    <section>
      <NavBar props={props.navigation[0]} />
      {/* <Style.wrapper>
        <Link href="/">
          <a>LOGGAN</a>
        </Link>
        <Link href="/openingHours">
          <a>{props.navigation[0].openingHours}</a>
        </Link>
        <Link href="/findUs">
          <a>{props.navigation[0].findUs}</a>
        </Link>

        <Link href="/about">
          <a>{props.navigation[0].about}</a>
        </Link>
        <Link href="/event">
          <a>{props.navigation[0].event}</a>
        </Link>
        <Link href="/catering">
          <a>{props.navigation[0].catering}</a>
        </Link>
        <Link href="/menu">
          <a>{props.navigation[0].menu}</a>
        </Link>
      </Style.wrapper> */}

      {children}
      <Footer props={props.footer[0]} />
    </section>
  );
};

export default Layout;
