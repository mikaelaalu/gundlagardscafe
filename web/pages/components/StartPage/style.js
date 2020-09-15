import styled from "styled-components";

const title = styled.h1`
  font-size: 40px;
  text-align: center;
  width: 70vw;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const box = styled.div`
  width: 42vw;
  height: 47vw;
  margin: 8px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(p) => p.img});
  background-size: cover;
`;

const container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

const wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const a = styled.a`
  font-weight: bold;
  font-size: 24px;
`;

const icon = styled.img`
  width: 60px;
  height: 50px;
`;

export default { box, wrapper, container, title, a, icon };
