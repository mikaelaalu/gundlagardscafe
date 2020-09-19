import styled from "styled-components";

const wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 103px;
  background-color: var(--dipp-beige);
  position: sticky;
  top: 0;
`;

const layout = styled.section`
  width: 100vw;
  margin: 0;
`;

export default { wrapper, layout };
