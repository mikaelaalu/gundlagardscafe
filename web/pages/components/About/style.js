import styled from "styled-components";

const about = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: var(--light-black); */
`;

const textWrapper = styled.div`
  width: 90%;
`;

const imageWrapper = styled.div`
  width: 100vw;
  height: 100vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default { about, textWrapper, imageWrapper };
