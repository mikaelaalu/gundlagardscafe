import styled from "styled-components";

const container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const form = styled.form`
  width: 90%;
`;

const input = styled.input`
  width: 100%;
  height: 50px;
  border: 0.25px solid #0b3546;
`;

const smallInput = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border: 0.25px solid #0b3546;
`;

const button = styled.button`
  width: 100%;
  background-color: var(--baked-orange);
  height: 55px;
  border: none;
  font-size: 18px;
  font-weight: bold;
`;

export default { input, smallInput, button, container, form };
