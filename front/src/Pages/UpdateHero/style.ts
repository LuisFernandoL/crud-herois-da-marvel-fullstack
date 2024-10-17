import { Link } from "react-router-dom";
import styled from "styled-components";

export const StylePageUpdate = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 36%,
    rgba(0, 129, 255, 0.9836309523809523) 100%
  );

  .div-container-update {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .div-internal-container {
      display: flex;
      width: 50rem;
      flex-direction: column;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 2rem;
      gap: 4rem;

      .span-title-update {
        display: flex;
        flex-direction: row;
        font-size: 2rem;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .form-update-hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        label {
          display: flex;
          width: 80%;
          padding-top: 1rem;
          font-size: 1.6rem;
          font-weight: 500;
          color: rgba(102, 100, 100, 0.5);
        }

        .div-btn-update-hero {
          display: flex;
          flex-direction: row;
          width: 80%;
          justify-content: center;
          align-items: center;
          padding-top: 2rem;

          .btn-update {
            width: 40%;
            margin: none;
            display: flex;
            padding: 1rem;
            font-size: 2rem;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            border-radius: 0.8rem;
            box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.48);
            background-color: rgba(23, 98, 227, 1);
          }
        }
      }
    }
  }
`;

export const StyleLink = styled(Link)`
  width: 10rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  font-size: 2rem;
  color: #ffffff;
  font-weight: 500;
  background-color: rgba(23, 98, 227, 1);
`;
