import styled from "styled-components";

const title = styled.h1`
  font-size: 40px;
  text-align: center;
  width: 70vw;
  margin-top: 10px;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-bottom: 0px;
    font-size: 60px;
  }
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

  @media (min-width: 768px) {
    width: 207px;
    height: 337px;
  }
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

  @media (min-width: 768px) {
    margin-top: 80px;
  }
`;

const a = styled.a`
  font-weight: bold;
  font-size: 24px;
`;

const iconMobile = styled.img`
  width: 60px;
  height: 50px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const smallIconDesktop = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 40px;
    height: 50px;
  }
`;

const bigIconDesktop = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 164px;
    height: 135px;
  }
`;

const flexTitle = styled.div`
  display: flex;
  width: 70%;
`;

export default {
  box,
  wrapper,
  container,
  title,
  a,
  iconMobile,
  smallIconDesktop,
  bigIconDesktop,
  flexTitle,
};
