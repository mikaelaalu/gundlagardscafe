import styled from "styled-components";

const about = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const textContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    display: block;
    margin: 0;
  }
`;

export default { about, textContent, textWrapper, imageWrapper };
