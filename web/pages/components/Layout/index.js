import Link from "next/link";
import Footer from "../Footer";

const Layout = ({ children, props }) => {
  //Hamburger menu in here?
  return (
    <section>
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
      <Link href="/about">
        <a>Om Oss</a>
      </Link>
      {children}
      <Footer props={props.footer[0]} />
    </section>
  );
};

export default Layout;
