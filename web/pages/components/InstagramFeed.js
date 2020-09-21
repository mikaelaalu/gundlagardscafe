import styled from "styled-components";
const Title = styled.h3`
  padding-left: 21px;
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100vw;
  padding-bottom: 85px;
  padding-top: 24px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 5px;
`;

const InstagramFeed = ({ props, title }) => {
  const allImages = props.graphql.user.edge_owner_to_timeline_media.edges;
  const fourImages = allImages.slice(0, 4);
  console.log(title);
  return (
    <section>
      <Title>{title}</Title>

      <ImgWrapper>
        {fourImages.map((image, i) => (
          <div key={i}>
            <Img src={image.node.display_url} key={i} />
          </div>
        ))}
      </ImgWrapper>
    </section>
  );
};

export default InstagramFeed;
