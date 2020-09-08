import Link from "next/link";
import Footer from "../Footer";

const Layout = ({ children, props }) => {
  //Hamburger menu in here?
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/openingHours">
        <a>Öppettider</a>
      </Link>
      <Link href="/findUs">
        <a>Hitta hit</a>
      </Link>
      <Link href="/menu">
        <a>Meny</a>
      </Link>
      {children}
      <Footer props={props.footer[0]} />
    </div>
  );
};

export default Layout;
