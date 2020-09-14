import Link from "next/link";
import Footer from "../Footer";
import Style from "./style";
import NavBar from "../NavBar";

const Layout = ({ children, props }) => {
  //loga mobile into navbar
  //logo mobile in navbar -> burger -> rightnav

  return (
    <section>
      <NavBar
        props={props.navigation[0]}
        logoMobile={props.icon[0].iconArray[5]}
        logoDesktop={props.icon[0].iconArray[4]}
      />
      {children}
      <Footer props={props.footer[0]} logo={props.icon[0].iconArray[6]} />
    </section>
  );
};

export default Layout;
