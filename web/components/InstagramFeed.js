import styled from "styled-components";

const Title = styled.h3`
  color: black;
  margin-top: 0px;
  @media (min-width: 768px) {
    width: 34vw;
    margin-top: 0px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding-bottom: 40px;
  padding-top: 8px;
  background-color: white;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 40vw;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  padding: 5px;
`;

const Container = styled.div`
  flex: 30%;
`;

const InstaSection = styled.section`
  @media (min-width: 768px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 40px;
  margin: 0 10px;
`;

const Flex = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InstagramFeed = ({ props, username, profilePic }) => {
  const fourImages = props.slice(0, 6);

  return (
    <InstaSection>
      <ImgWrapper>
        <Flex>
          <ProfilePic loading="lazy" src={profilePic} />
          <a href={"https://www.instagram.com/gundlagardscafe"}>
            <Title>{username}</Title>
          </a>
        </Flex>
        <ImageContainer>
          {fourImages.map((image, i) => (
            <Container key={i}>
              <Img loading="lazy" src={image.node.display_url} key={i} />
            </Container>
          ))}
        </ImageContainer>
      </ImgWrapper>
    </InstaSection>
  );
};

export default InstagramFeed;
