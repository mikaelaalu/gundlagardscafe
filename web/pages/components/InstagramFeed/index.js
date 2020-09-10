const InstagramFeed = ({ props }) => {
  const allImages = props.graphql.user.edge_owner_to_timeline_media.edges;
  const sixImages = allImages.slice(0, 6);

  return (
    <div>
      <h2>Wow this is cool, it's a instagramfeed!!</h2>
      {sixImages.map((image, i) => (
        <div key={i}>
          <img width={"200px"} src={image.node.display_url} key={i}></img>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
