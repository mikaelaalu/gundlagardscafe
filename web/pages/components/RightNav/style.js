import styled from "styled-components";

const ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  a {
    padding: 18px 10px;
    text-decoration: none;
    color: black;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--light-black);
    position: fixed;
    transform: ${(p) => (p.open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    padding-top: 80px;
    transition: transform 0.3s ease-in-out;

    a {
      padding: 17px 24px;
      font-size: 24px;
      color: white;
    }
  }
`;

const exit = styled.div`
  width: 25px;
  height: 20px;
  position: fixed;
  top: 40px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
`;

//Update styling for cross in here
const crossOne = styled.div`
  width: 25px;
  height: 2px;
  background-color: var(--white);
  transform: rotate(45deg);
`;

const crossTwo = styled.div`
  width: 25px;
  height: 2px;
  background-color: var(--white);
  transform: rotate(-45deg);
`;

export default { ul, exit, crossOne, crossTwo };
