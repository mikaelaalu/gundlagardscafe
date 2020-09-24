import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100vw;
  height: 100vw;

  @media (min-width: 768px) {
    flex: 1;
    max-width: 700px;
    min-width: 400px;
    max-height: 560px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;

const PageImage = (props) => {
  return (
    <ImageWrapper>
      <img loading="lazy" src={props.src} alt={props.alt} />
    </ImageWrapper>
  );
};

export default PageImage;
