import imageUrlBuilder from "../imageUrlBuilder";
import styled from "styled-components";

const Link = styled.a`
  color: white;
  text-decoration: none;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
    align-items: center;
    /* justify-content: center; */
  }
  /* margin-bottom: 40px; */
`;

const FooterWrapper = styled.footer`
  color: white;
  background-color: var(--secondary-mud);
  /* height: 580px; */
  display: flex;
  flex-direction: column;
  padding: 30px 24px 80px 24px;

  @media (min-width: 768px) {
    margin-top: 200px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 90px;
  height: auto;
  margin-top: 56px;
  margin-bottom: 52px;

  @media (min-width: 768px) {
    width: auto;
    height: 200px;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const IconWrapper = styled.div`
  @media (min-width: 768px) {
    /* flex: 1; */
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    /* justify-content: space-evenly; */
    align-items: center;
    justify-content: center;
    width: 67%;
  }
`;

const Height = styled.div`
  @media (min-width: 768px) {
    height: 300px;
  }
`;

const Footer = ({ props, icons }) => {
  const iconSrc = icons.iconArray[6].iconImage.asset._ref;
  const iconAlt = icons.iconArray[6].iconAlt;
  const facebookSrc = icons.iconArray[7].iconImage.asset._ref;
  const facebookAlt = icons.iconArray[7].iconAlt;
  const instagramSrc = icons.iconArray[8].iconImage.asset._ref;
  const instagramAlt = icons.iconArray[8].iconAlt;
  const mailSrc = icons.iconArray[9].iconImage.asset._ref;
  const mailAlt = icons.iconArray[9].iconAlt;
  const numberSrc = icons.iconArray[10].iconImage.asset._ref;
  const numberAlt = icons.iconArray[10].iconAlt;
  const addressSrc = icons.iconArray[11].iconImage.asset._ref;
  const addressAlt = icons.iconArray[11].iconAlt;

  return (
    <FooterWrapper>
      <IconWrapper>
        <Logo src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
      </IconWrapper>

      <TextWrapper>
        <Box>
          <Height>
            <Title>{props.follow}</Title>
            <Flex>
              <Icon src={imageUrlBuilder(facebookSrc)} alt={facebookAlt} />
              <Link href={props.facebookLink}>{props.facebook}</Link>
            </Flex>
            <Flex>
              <Icon src={imageUrlBuilder(instagramSrc)} alt={instagramAlt} />
              <Link href={props.instagramLink}>{props.instagram}</Link>
            </Flex>
          </Height>
        </Box>

        <Box>
          <Height>
            <Title>{props.contact}</Title>
            <Flex>
              <Icon src={imageUrlBuilder(mailSrc)} alt={mailAlt} />
              <p>{props.mail}</p>
            </Flex>
            <Flex>
              <Icon src={imageUrlBuilder(numberSrc)} alt={numberAlt} />
              <p>{props.number}</p>
            </Flex>
            <Flex>
              <Icon src={imageUrlBuilder(addressSrc)} alt={addressAlt} />
              <p>{props.address}</p>
            </Flex>
          </Height>
        </Box>
      </TextWrapper>
    </FooterWrapper>
  );
};

export default Footer;
