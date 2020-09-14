import styled from "styled-components";

const box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const timeBox = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

const icon = styled.img`
  width: 60px;
  height: 50px;
`;

export default { box, timeBox, icon };
