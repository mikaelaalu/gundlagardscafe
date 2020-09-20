import styled from "styled-components";

const burger = styled.div`
  width: 25px;
  height: 20px;
  position: fixed;
  top: 40px;
  right: 20px;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 25px;
    height: 2px;
    background-color: black;
  }
`;

export default { burger };
 