import imageUrlBuilder from "../../../imageUrlBuilder";
import PageIcon from "../PageIcon";
import PageTitle from "../PageTitle";

const EventIntro = ({ event, icon }) => {
  const IconSrc = icon.iconArray[1].iconImage.asset._ref;
  const IconAlt = icon.iconArray[1].iconAlt;

  return (
    <div className="textContent">
      <div className="iconAndTitleContainer">
        <div className="iconAndTitleWrapper">
          <PageIcon src={imageUrlBuilder(IconSrc)} alt={IconAlt} />
          <PageTitle title={event.heading} />
        </div>
      </div>
      <p>{event.description}</p>
    </div>
  );
};

export default EventIntro;
