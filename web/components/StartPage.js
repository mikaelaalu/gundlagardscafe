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
  width: 70%;
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
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 80px;
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
  background-image: url(${(p) => p.img});
  background-size: cover;

  @media (min-width: 768px) {
    width: 207px;
    height: 337px;
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

const StartPage = ({ props, icon }) => {
  const iconTreeSrc = icon.iconArray[0].iconImage.asset._ref;
  const iconTreeAlt = icon.iconArray[0].iconAlt;
  const iconFire = icon.iconArray[12].iconImage.asset._ref;
  const iconFireAlt = icon.iconArray[12].iconAlt;

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
          </Box>
        </Link>
        <Link href="/findUs">
          <Box img={imageUrlBuilder(props.imageFindUs.asset._ref)}>
            <A>{props.findUs}</A>
          </Box>
        </Link>
        <Link href="/about">
          <Box img={imageUrlBuilder(props.imageAbout.asset._ref)}>
            <A>{props.about}</A>
          </Box>
        </Link>
        <Link href="/event">
          <Box img={imageUrlBuilder(props.imageEvent.asset._ref)}>
            <A>{props.event}</A>
          </Box>
        </Link>
        <Link href="/catering">
          <Box img={imageUrlBuilder(props.imageCatering.asset._ref)}>
            <A>{props.catering}</A>
          </Box>
        </Link>
        <Link href="/menu">
          <Box img={imageUrlBuilder(props.imageMeny.asset._ref)}>
            <A>{props.menu}</A>
          </Box>
        </Link>
      </Wrapper>
    </StartPageSection>
  );
};

export default StartPage;
