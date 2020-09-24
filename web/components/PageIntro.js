import styled from "styled-components";

const TextWrapper = styled.div`
  width: 90%;

  @media (min-width: 768px) {
    width: 100%;
  }

  h3 {
    font-weight: bold;
  }

  /* if two <p> elements are placed after each other */
  p + p {
    margin-top: 20px;
  }
`;

const PageIntro = (props) => {
  return <TextWrapper>{props.children}</TextWrapper>;
};

export default PageIntro;
