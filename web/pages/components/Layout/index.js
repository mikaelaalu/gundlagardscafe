import Link from "next/link";
import Footer from "../Footer";
import Style from "./style";
import NavBar from "../NavBar";

const Layout = ({ children, props }) => {
  //Hamburger menu in here?

  return (
    <section>
      <NavBar props={props.navigation[0]} />
      {children}
      <Footer props={props.footer[0]} logo={props.icon[0].iconArray[6]} />
    </section>
  );
};

export default Layout;
