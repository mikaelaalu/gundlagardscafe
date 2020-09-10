import PortableText from "@sanity/block-content-to-react";
const Menu = ({ props }) => {
  return (
    <div>
      <h2>{props.titleMenu}</h2>
      <PortableText blocks={props.menuText} />
    </div>
  );
};

export default Menu;
