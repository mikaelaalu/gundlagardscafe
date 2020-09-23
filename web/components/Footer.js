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
  }

  h3 {
    @media (min-width: 768px) {
      margin: 0;
    }
  }
`;

const FooterWrapper = styled.footer`
  color: white;
  background-color: var(--secondary-mud);
  display: flex;
  flex-direction: column;
  padding: 30px 24px 80px 24px;
  margin-top: 85px;

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
    margin: auto 0;
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
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const TextWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 66%;
    height: 100%;
    min-height: 308px;
  }
`;

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin: auto 0;
  }
`;

const LeftAlign = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
        <Container>
          <Box>
            <LeftAlign>
              <Title>{props.follow}</Title>
              <Flex>
                <Icon src={imageUrlBuilder(facebookSrc)} alt={facebookAlt} />
                <Link href={props.facebookLink}>{props.facebook}</Link>
              </Flex>
              <Flex>
                <Icon src={imageUrlBuilder(instagramSrc)} alt={instagramAlt} />
                <Link href={props.instagramLink}>{props.instagram}</Link>
              </Flex>
            </LeftAlign>
          </Box>

          <Box>
            <LeftAlign>
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
            </LeftAlign>
          </Box>
        </Container>
      </TextWrapper>
    </FooterWrapper>
  );
};

export default Footer;
