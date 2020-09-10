import { useState } from "react";
import Style from "./style";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <Style.burger open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </Style.burger>
  );
};

export default Burger;
