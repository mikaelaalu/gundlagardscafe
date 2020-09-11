import { useState } from "react";
import Style from "./style";
import RightNav from "../RightNav";

const Burger = ({ props }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Style.burger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Style.burger>
      <RightNav props={props} open={open} />
    </div>
  );
};

export default Burger;
