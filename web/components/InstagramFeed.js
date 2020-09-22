import styled from "styled-components";
const Title = styled.h3`
  padding-left: 21px;
  @media (min-width: 768px) {
    padding-left: 5px;
    width: 70vw;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100vw;
  padding-bottom: 85px;
  padding-top: 24px;
  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 70vw;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  padding: 5px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const InstaSection = styled.section`
  @media (min-width: 768px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InstagramFeed = ({ props, title }) => {
  const fourImages = props.slice(0, 4);

  return (
    <InstaSection>
      <Title>{title}</Title>

      <ImgWrapper>
        {fourImages.map((image, i) => (
          <Container key={i}>
            <Img src={image.node.display_url} key={i} />
          </Container>
        ))}
      </ImgWrapper>
    </InstaSection>
  );
};

export default InstagramFeed;
