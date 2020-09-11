import Style from "./style";

const PageIcon = (props) => {
  return (
    <Style.iconWrapper>
      <img src={props.src} alt={props.alt} />
    </Style.iconWrapper>
  );
};

export default PageIcon;
