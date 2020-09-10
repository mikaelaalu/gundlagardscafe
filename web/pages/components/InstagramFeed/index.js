const InstagramFeed = ({ props }) => {
  const images = props.graphql.user.edge_owner_to_timeline_media.edges;

  return (
    <div>
      <h2>Wow this is cool, it's a instagramfeed!!</h2>
      {images.map((image, i) => (
        <div key={i}>
          <img width={"200px"} src={image.node.display_url} key={i}></img>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
