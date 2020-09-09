import styled from "styled-components";

const title = styled.h1`
  font-size: 40px;
  text-align: center;
`;

const box = styled.div`
  width: 157px;
  height: 171px;
  border: 1px solid black;
  margin: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export default { box, wrapper, container, title };
