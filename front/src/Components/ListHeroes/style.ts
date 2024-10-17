import styled from "styled-components";

export const StyleListHero = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100vh; */

  .div-container-list {
    display: flex;
    /* flex-direction: column; */
    width: 100%;
    gap: 2rem;
    align-items: center;

    ul {
      display: flex;
      width: 100%;
      gap: 2rem;
      margin-left: 1.5rem;
      padding: 0 1rem;
      flex-wrap: wrap;
      justify-items: center;
      align-items: center;
    }
  }
`;
