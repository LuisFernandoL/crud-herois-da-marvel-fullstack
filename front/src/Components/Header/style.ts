import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 10rem;
  box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.48);
  margin-bottom: 2rem;

  .div-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .div-internal {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 2rem;
      flex-wrap: wrap;

      .h1-header {
        font-size: 4rem;
        font-weight: 700;
        color: #ffffff;
      }

      .btn-header {
        width: 10rem;
        align-items: center;
        justify-content: center;
        height: 4rem;
        color: #ffffff;
        background-color: rgba(23, 98, 227, 1);
        border-radius: 0.8rem;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.48);
      }
    }
  }
`;
