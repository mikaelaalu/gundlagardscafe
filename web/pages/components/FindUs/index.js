import PortableText from "@sanity/block-content-to-react";

const FindUs = ({ props }) => {
  return (
    <div>
      <h2>{props.titleFindUs}</h2>
      <PortableText blocks={props.findUsText} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.770127449548!2d12.026421551457176!3d57.686384781021715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3e9fab7c319%3A0x881e787529cd7b7c!2sGundla%20mosse%2032%2C%20412%2076%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1600090886287!5m2!1ssv!2sse"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default FindUs;
