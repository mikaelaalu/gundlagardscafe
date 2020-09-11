import Style from "./style";

const PageImage = (props) => {
  return (
    <Style.imageWrapper>
      <img src={props.src} alt={props.alt} />
    </Style.imageWrapper>
  );
};

export default PageImage;
