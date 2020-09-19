import styled from "styled-components";

const event = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const eventsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 82%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const textWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 90%;
    /* flex-direction: row;
    justify-content: space-between; */
  }
`;

const hej = styled.div`
  width: 200px;
  background-color: hotpink;
`;

export default { event, eventsWrapper, textWrapper, hej };

// https://styled-components.com/docs/advanced
