import Style from "./style";

const PageIcon = (props) => {
  return (
    <Style.imageWrapper>
      <img src={props.src} alt={props.alt} />
    </Style.imageWrapper>
  );
};

export default PageIcon;
