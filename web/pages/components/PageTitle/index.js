import Style from "./style";

const PageTitle = (props) => {
  return (
    <Style.pageTitle>
      <h2>{props.title}</h2>
    </Style.pageTitle>
  );
};

export default PageTitle;
