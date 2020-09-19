import styled from "styled-components";

const container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const form = styled.form`
  width: 90%;

  @media (min-width: 768px) {
    width: 45%;
  }
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
  margin-top: 15px;
  margin-bottom: 100px;
  width: 100%;
  background-color: var(--baked-orange);
  height: 55px;
  border: none;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const bookEventDiv = styled.div`
  width: 90%;

  p:nth-child(2) {
    margin-top: 24px;
  }

  p:last-child {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    width: 45%;
  }
`;

export default { container, form, input, smallInput, button, bookEventDiv };
