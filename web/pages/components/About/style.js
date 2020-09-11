import styled from "styled-components";

const about = styled.section`
  margin-top: 102px;
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

export default { about, textContent, imageWrapper };
