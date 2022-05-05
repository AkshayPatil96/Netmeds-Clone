import styled from "styled-components";

export const Wrapper = styled.div`
  width: 52.02vw;
  /* border: 1px solid black; */
  margin: auto;
  margin-top: 100px;
  display: flex;
  border-radius: 12px;
  background-color: #ffffff;
  p,
  h1,
  h2 {
    margin: 0;
  }
  .imgCon {
    img {
      width: 26.01vw;
      border-radius: 12px;
    }
  }

  .signInForm {
    /* height: 100%; */
    padding: 3.42vh 2.5vw;
    width: 100%;
  }
`;

export const OTPdiv = styled.div`
  /* border: 1px solid; */
  box-sizing: border-box;
  padding: 0 1.67vw;
  h2 {
    font-size: 2.71vh;
    margin-bottom: 0.91vh;
  }

  h2 + p {
    color: #151b39;
    opacity: 60%;
    font-size: 1.59vh;
    margin-bottom: 3.99vh;
  }

  .addNumberCon {
    /* border: 1px solid black; */
    p {
      color: #24aeb1;
      font-weight: bold;
      font-size: 1.3vh;

      /* margin-bottom: 1.14vh; */
    }

    .numberInputDiv {
      border-bottom: 1px solid #e4dede;
      display: flex;
      height: 3.64vh;
      align-items: center;
      font-size: 1.82vh;
      /* margin-bottom: 3vh; */

      div {
        border-right: 1px solid;
        font-weight: bold;
        padding-right: 0.3vw;
      }

      input {
        height: 90%;
        border: 0;
        text-indent: 0.7vw;
        flex-grow: 1;

        &:focus {
          outline: none;
        }
        &::placeholder {
          color: #e4dede;
          font-size: 1.9vh;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }

    .invalidInput {
      height: 2.5vh;
      font-style: italic;
      color: #e55429;
      font-size: 1.25vh;
    }
  }
  .submitOTP {
    cursor: pointer;
    width: 100%;
    background-color: #24aeb1;
    color: #ffffff;
    font-weight: bold;
    height: 4.67vh;
    border: 0;
    border-top: #151b39;
    border-radius: 5px;
    font-size: 1.59vh;
  }

  //OtpFields CSS

  //Container
  .otpSubmitContainer {
    display: flex;
    /* border: 1px solid black; */

    flex-direction: column;
    gap: 1.5vh;
  }
  p {
    color: #24aeb1;
    font-weight: bold;
    font-size: 1.3vh;

    /* margin-bottom: 1.14vh; */
  }
  .otpInputFieldCon {
    /* border: 1px solid black; */
    display: flex;
    gap: 0.5vw;
    justify-content: space-between;
  }
  .otpInputField {
    width: 2.81vw;
    height: 3.15vh;
    font-size: 2.28vh;
    padding: 1vh 0;
    text-align: center;
    background-color: #f6f6f7;
    border: 1px solid #9c9fab;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently*/
    &:focus {
      outline: none;
    }
  }

  //Social Login options
  .socialLoginCon {
    padding-top: 10vh;

    div {
      height: 4.9vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1vw;

      padding: 0 1.41vw;
    }
    .socialLogin {
      height: 100%;
      width: 7.7vw;
      border: 1px solid #d4dae0;
      border-radius: 5px;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.59vh;
      gap: 1.1vw;
      text-decoration: none;
      color: #151b39;
      span {
        opacity: 60%;
      }
      img {
        width: 1vw;
      }
    }
  }
`;
