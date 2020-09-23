import styled from "styled-components";
import Link from "next/link";
import imageUrlBuilder from "../imageUrlBuilder";

const StartPageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

const IconMobile = styled.img`
  width: 60px;
  height: 50px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const FlexTitle = styled.div`
  display: flex;
  align-items: center;
`;

const BigIconDesktop = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 164px;
    height: 135px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  width: 70vw;
  margin-top: 10px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 60px;
    width: 405px;
    margin: 0 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 80px;
    width: 100vw;
  }
`;

const Box = styled.div`
  width: 42vw;
  height: 47vw;
  margin: 8px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url(${(p) => p.img});
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    width: 15vw;
    height: 25vw;
    flex-direction: column;
    cursor: pointer;
  }
`;

const A = styled.a`
  font-weight: bold;
  font-size: 24px;
`;

const SmallIconDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 40px;
    height: auto;
  }

  img {
    display: none;

    @media (min-width: 768px) {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }
`;

const ArrowIconDesktop = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 5vw;
    height: auto;
    margin-top: 5px;
  }
`;

const StartPage = ({ props, icon }) => {
  const iconTreeSrc = icon.iconArray[0].iconImage.asset._ref;
  const iconTreeAlt = icon.iconArray[0].iconAlt;
  const iconFire = icon.iconArray[12].iconImage.asset._ref;
  const iconFireAlt = icon.iconArray[12].iconAlt;

  const iconArrow = icon.iconArray[13].iconImage.asset._ref;
  const iconArrowAlt = icon.iconArray[13].iconAlt;

  return (
    <StartPageSection>
      <IconMobile src={imageUrlBuilder(iconTreeSrc)} alt={iconTreeAlt} />

      <SmallIconDesktop>
        <img src={imageUrlBuilder(iconFire)} alt={iconFireAlt} />
      </SmallIconDesktop>

      <FlexTitle>
        <BigIconDesktop src={imageUrlBuilder(iconTreeSrc)} alt={iconTreeAlt} />
        <Title>{props.title}</Title>
        <BigIconDesktop src={imageUrlBuilder(iconTreeSrc)} alt={iconTreeAlt} />
      </FlexTitle>

      <Wrapper>
        <Link href="/openingHours">
          <Box img={imageUrlBuilder(props.imageOpeningHours.asset._ref)}>
            <A>{props.openingHours}</A>
            <ArrowIconDesktop
              src={imageUrlBuilder(iconArrow)}
              alt={iconArrowAlt}
            />
          </Box>
        </Link>
        <Link href="/findUs">
          <Box img={imageUrlBuilder(props.imageFindUs.asset._ref)}>
            <A>{props.findUs}</A>
            <ArrowIconDesktop
              src={imageUrlBuilder(iconArrow)}
              alt={iconArrowAlt}
            />
          </Box>
        </Link>
        <Link href="/about">
          <Box img={imageUrlBuilder(props.imageAbout.asset._ref)}>
            <A>{props.about}</A>
            <ArrowIconDesktop
              src={imageUrlBuilder(iconArrow)}
              alt={iconArrowAlt}
            />
          </Box>
        </Link>
        <Link href="/event">
          <Box img={imageUrlBuilder(props.imageEvent.asset._ref)}>
            <A>{props.event}</A>
            <ArrowIconDesktop
              src={imageUrlBuilder(iconArrow)}
              alt={iconArrowAlt}
            />
          </Box>
        </Link>
        <Link href="/catering">
          <Box img={imageUrlBuilder(props.imageCatering.asset._ref)}>
            <A>{props.catering}</A>
            <ArrowIconDesktop
              src={imageUrlBuilder(iconArrow)}
              alt={iconArrowAlt}
            />
          </Box>
        </Link>
        <Link href="/menu">
          <Box img={imageUrlBuilder(props.imageMeny.asset._ref)}>
            <A>{props.menu}</A>
            <ArrowIconDesktop
              src={imageUrlBuilder(iconArrow)}
              alt={iconArrowAlt}
            />
          </Box>
        </Link>
      </Wrapper>
    </StartPageSection>
  );
};

export default StartPage;
