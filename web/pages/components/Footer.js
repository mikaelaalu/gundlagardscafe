import imageUrlBuilder from "/../../../imageUrlBuilder";
import styled from "styled-components";

const A = styled.a`
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
  /* margin-bottom: 40px; */
`;

const Footer = styled.footer`
  color: white;
  background-color: var(--secondary-mud);
  /* height: 580px; */
  display: flex;
  flex-direction: column;
  padding: 30px 24px 80px 24px;

  @media (min-width: 768px) {
    margin-top: 200px;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 90px;
  margin-top: 56px;
  margin-bottom: 52px;
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
    <Footer>
      <Logo src={imageUrlBuilder(iconSrc)} alt={iconAlt} />
      <Box>
        <Title>{props.follow}</Title>
        <Flex>
          <Icon src={imageUrlBuilder(facebookSrc)} alt={facebookAlt} />
          <A href={props.facebookLink}>{props.facebook}</Style.a>
        </Flex>
        <Flex>
          <Icon src={imageUrlBuilder(instagramSrc)} alt={instagramAlt} />
          <A href={props.instagramLink}>{props.instagram}</A>
        </Flex>
      </Box>

      <Box>
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
      </Box>
    </Footer>
  );
};

export default Footer;
