import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  padding: 2rem;
  gap: 2rem;
  box-shadow: 0px 0px 9px -1px rgba(0, 0, 0, 0.48);
  border-radius: 8px;
  margin: 1rem;
  background-color: #ffff;

  .li-card {
    display: flex;
    flex-direction: column;
    height: 30rem;
    justify-content: space-between;

    .div-typhograf {
      display: flex;
      flex-direction: column;
      height: 90%;

      h2 {
        font-size: 1.6rem;
        font-weight: 500;
        color: rgba(144, 145, 144, 1);
      }
      h1 {
        font-size: 2.4rem;
        font-weight: 600;
        padding-bottom: 1rem;
      }
    }

    .div-btn {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .bnt-card-update {
        width: 40%;
        height: 4rem;
        color: #ffffff;
        background-color: rgba(9, 219, 89, 1);
        border-radius: 8px;
      }

      .bnt-card-delete {
        width: 40%;
        height: 4rem;
        color: #ffffff;
        border-radius: 8px;
        background-color: rgba(235, 12, 12, 1);
      }
    }
  }
`;
