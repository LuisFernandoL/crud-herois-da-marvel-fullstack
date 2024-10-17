import styled from "styled-components";

export const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;


  .div-container-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .span-create-hero {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #000000;
      .h1-create {
        font-size: 3.6rem;
        font-weight: 500;
      }
    }

    .form-create-hero {
      display: flex;
      flex-direction: column;
      width: 50%;
      align-items: center;
      justify-content: center;

      label {
        display: flex;
        width: 80%;
        align-items: flex-start;
        font-size: 1.6rem;
        padding: 0 1rem;
        color: rgba(102, 100, 100, 0.5);
      }

      .div-btn-create-form {
        width: 80%;
        display: flex;
        padding-top: 2rem;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .btn-form-create {
          width: 40%;
          margin: none;
          display: flex;
          padding: 1rem 0;
          font-size: 2rem;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          gap: 1rem;
          border-radius: 0.8rem;
          box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.48);
          background-color: rgba(23, 98, 227, 1);
        }
      }
    }
  }
`;
