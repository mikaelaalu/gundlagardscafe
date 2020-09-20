import styled from "styled-components";

const imageWrapper = styled.div`
  width: 100vw;
  height: 100vw;

  @media (min-width: 768px) {
    flex: 1;
    max-width: 700px;
    min-width: 400px;
    height: auto;
    border-radius: 100px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (min-width: 768px) {
      border-radius: 100px;
    }
  }
`;

export default { imageWrapper };
