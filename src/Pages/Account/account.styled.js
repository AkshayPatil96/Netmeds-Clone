import styled from "styled-components";

export const AccountContainer = styled.div`
  width: 1000px;
  height: auto;

  margin: auto;
  margin-top: 25px;

  h2,
  p {
    margin: 0;
  }

  .gridContainer {
    margin-top: 1rem;
    display: grid;
    column-gap: 30px;
    row-gap: 15px;

    grid-template-columns: 30% 1fr;
    grid-template-rows: auto auto;

    & > div {
      border-radius: 8px;
    }

    //Profile section
    .profileDetails {
      padding: 24px;
      display: flex;
      background-color: #ffffff;
      align-items: flex-start;
      gap: 20px;
      word-spacing: 5px;

      div {
        h2 {
          margin-bottom: 5px;
          font-size: 1.5rem;
        }

        p {
          font-size: 12px;
          color: #151b39;
          margin-bottom: 2px;
          opacity: 60%;
          line-height: 16px;
        }
      }
    }

    //Payment Methods
    .paymentOptionsContainer {
      padding: 24px;
      display: flex;
      background-color: #ffffff;
      justify-content: space-evenly;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 48px;
        }

        p {
          margin-top: 10px;
          font-size: 12px;
          line-break: 16px;
        }
      }
    }

    //Account List
    .accountOptions {
      padding: 16px;
      background-color: #ffffff;

      //List
      ul {
        cursor: pointer;
        margin: 0;
        padding: 0;

        list-style: none;

        li {
          height: 56px;
          box-sizing: border-box;
          padding: 16px 0;
          padding-right: 16px;
          border-bottom: 1px solid #f6f6f7;
          font-size: 14px;
          line-height: 16px;
          display: flex;
          justify-content: space-between;

          align-items: center;

          div {
            display: flex;
            align-items: center;

            span {
              height: 32px;
              width: 32px;
              border-radius: 50%;
              background-color: #f6f6f7;
              display: flex;
              align-items: center;
              justify-content: center;
              img {
                width: 15px;
              }
            }
          }
          .optionIcon {
            width: 35px;
          }

          .links {
            text-decoration: none;
            color: #151b39;
            margin-left: 16px;
          }
        }
      }
    }

    //Info

    .infoReletedTo {
      & > div {
        background-color: #ffffff;
        padding: 15px 25px;
        border-radius: 8px;
        height: auto;
        display: flex;
        gap: 20px;

        & > div {
          width: 50%;
        }
        .loginInfo,
        .personalInfo {
          display: flex;
          flex-direction: column;
          gap: 15px;
          & > p:first-child {
            font-size: 12px;
            font-weight: bold;
            line-height: 16px;

            color: #151b39;
            letter-spacing: 1px;
            opacity: 60%;
          }

          label {
            font-size: 12px;
            color: #24aeb1;
            font-weight: bold;
          }

          div:not(.buttonToModify) {
            /* border: 1px solid red; */
            display: flex;
            flex-direction: column;
            gap: 7px;
            padding: 8px 0;
            border-bottom: 1px solid #f6f6f7;

            p {
              font-size: 16px;
              line-height: 24px;
              color: #151b39;
            }
          }
          //Added button to flex end
          .buttonToModify {
            display: flex;
            justify-content: flex-end;
            button {
              width: 140px;
              height: 40px;
              background-color: #f6f6f7;
              color: #ef4281;
              font-size: 14px;
              line-height: 14px;
              border: 0;
              border-radius: 4px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
