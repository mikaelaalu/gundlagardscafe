import Style from "./style";

const InstagramFeed = ({ props, title }) => {
  const allImages = props.graphql.user.edge_owner_to_timeline_media.edges;
  const fourImages = allImages.slice(0, 4);
  console.log(title);
  return (
    <section>
      <Style.title>{title}</Style.title>

      <Style.imgWrapper>
        {fourImages.map((image, i) => (
          <div key={i}>
            <Style.img src={image.node.display_url} key={i} />
          </div>
        ))}
      </Style.imgWrapper>
    </section>
  );
};

export default InstagramFeed;
