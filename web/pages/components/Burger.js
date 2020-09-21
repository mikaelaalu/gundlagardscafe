import { useState } from "react";
import RightNav from "./RightNav";
import styled from "styled-components";

const Burger = styled.div`
  width: 25px;
  height: 20px;
  position: fixed;
  top: 40px;
  right: 20px;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 25px;
    height: 2px;
    background-color: black;
  }
`;

const Burger = ({ props, logoDesktop }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
      <RightNav
        props={props}
        open={open}
        setOpen={setOpen}
        logoDesktop={logoDesktop}
      />
    </div>
  );
};

export default Burger;
