import PortableText from "@sanity/block-content-to-react";

const Menu = ({ props }) => {
  return (
    <div>
      <h2>{props[0].titleMenu}</h2>
      <PortableText blocks={props[0].menuText} />
    </div>
  );
};

export default Menu;
