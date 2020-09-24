import Footer from "./Footer";
import NavBar from "./NavBar";
import styled from "styled-components";
import Head from "next/head";

const LayoutSection = styled.section`
  width: 100vw;
  margin: 0;
`;

const Layout = ({ children, props }) => {
  return (
    <LayoutSection>
      <div>
        <Head>
          <title>Gundla Gårdscafé</title>
          <link
            rel="icon"
            type="image/png"
            href="../public/images/favicon.png"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>
      <NavBar
        props={props.navigation[0]}
        logoMobile={props.icon[0].iconArray[5]}
        logoDesktop={props.icon[0].iconArray[4]}
      />
      {children}
      <Footer props={props.footer[0]} icons={props.icon[0]} />
    </LayoutSection>
  );
};

export default Layout;
