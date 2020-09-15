import styled from "styled-components";

const box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-top: 10px;
  }
`;

const timeBox = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin-top: 20px;
`;

const icon = styled.img`
  width: 60px;
  height: 50px;
`;

const infoText = styled.p`
  margin-top: 34px;
  padding-bottom: 85px;
`;

export default { box, timeBox, icon, infoText };
