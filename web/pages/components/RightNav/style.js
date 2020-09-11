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
    background-color: hotpink;
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
    }
  }
`;

export default { ul };
