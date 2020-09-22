import styled from "styled-components";

const IconWrapper = styled.div`
  width: 45px;
  height: auto;
  background-color: var(--light-black);

  @media (min-width: 768px) {
    width: 80px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const PageIcon = (props) => {
  return (
    <IconWrapper>
      <img src={props.src} alt={props.alt} />
    </IconWrapper>
  );
};

export default PageIcon;
