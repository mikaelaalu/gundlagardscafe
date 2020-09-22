import Footer from "./Footer";
import NavBar from "./NavBar";
import styled from "styled-components";

const LayoutSection = styled.section`
  width: 100vw;
  margin: 0;
`;

const Layout = ({ children, props }) => {
  return (
    <LayoutSection>
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
