import styled from "styled-components";

const Title = styled.div`
  margin-top: 10px;

  h2 {
    font-size: 24px;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }
`;

const PageTitle = (props) => {
  return (
    <Title>
      <h2>{props.title}</h2>
    </Title>
  );
};

export default PageTitle;
