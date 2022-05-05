import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, OTPdiv } from "./login.styled";
import axios from "axios";
import { nanoid } from "nanoid";

const OTP = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  //OTP Countdown
  const [otpTimeOut, setOtpTimeout] = useState(45);

  //Auth
  const [userAuth, setUserAuth] = useState(false);

  let id = useRef();

  //Changing OTP State
  useEffect(() => {
    setOtp(new Array(6).fill(""));
  }, [checkSubmit]);
  //Handling otp input
  const handleOtpInput = (el, i) => {
    if (isNaN(el.value)) return false;

    setOtp([...otp.map((d, ind) => (ind === i ? el.value : d))]);

    if (el.nextSibling) {
      el.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    if (mobileNumber.length < 10) {
      setErrorMsg("Please enter valid Mobile Number!");
      return;
    }

    getAuthNo(mobileNumber);
    setCheckSubmit(!checkSubmit);
    setOtpTimeout(45);
    setErrorMsg("");

    //Time out for otp
    id.current = setInterval(() => {
      setOtpTimeout((prev) => prev - 1);
    }, 1000);
  };

  if (otpTimeOut === 0) {
    clearInterval(id.current);
  }

  //User Auth
  const getAuthNo = async (number) => {
    try {
      let res = await axios.get(
        `http://localhost:8080/auth?mobileNumber=${number}`
      );
      let data = await res.data;

      if (data.length !== 0) {
        setUserAuth(true);
        console.log(userAuth);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  //On Submit Form
  const handleSubmitForm = () => {};
  return (
    <OTPdiv>
      {/* <div> */}
      {!checkSubmit ? (
        <>
          <h2>Sign In / Sign Up</h2>
          <p>
            Sign up or Sign in to access your orders, special offers, health
            tips and more!
          </p>
          <div className="addNumberCon">
            <p>PHONE NUMBER</p>
            <div className="numberInputDiv">
              <div>+91</div>
              <input
                minLength={10}
                maxLength={10}
                type="tel"
                placeholder="Enter your mobile no"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              {checkSubmit && (
                <p
                  onClick={() => {
                    setCheckSubmit(false);
                    setMobileNumber("");
                    setUserAuth(false);
                    clearInterval(id.current);
                  }}
                  style={{ color: "#dd4e46", cursor: "pointer" }}
                >
                  change
                </p>
              )}
            </div>

            <p className="invalidInput">{errorMsg}</p>
          </div>
          <button className="submitOTP" onClick={handleSubmit}>
            USE OTP
          </button>
        </>
      ) : userAuth ? (
        <>
          <h2>Sign In </h2>
          <p>
            Sign up or Sign in to access your orders, special offers, health
            tips and more!
          </p>
          <div className="addNumberCon">
            <p>PHONE NUMBER</p>
            <div className="numberInputDiv">
              <div>+91</div>
              <input
                minLength={10}
                maxLength={10}
                type="tel"
                placeholder="Enter your mobile no"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              {checkSubmit && (
                <p
                  onClick={() => {
                    setCheckSubmit(false);
                    setMobileNumber("");
                    setUserAuth(false);
                    clearInterval(id.current);
                  }}
                  style={{ color: "#dd4e46", cursor: "pointer" }}
                >
                  change
                </p>
              )}
            </div>

            <p className="invalidInput">{errorMsg}</p>

            {/* OTP CONTAINER */}
            <div className="otpSubmitContainer">
              <div style={{ display: "flex", justifyContent: "space-btween" }}>
                <p style={{ color: "#838696" }}>We have sent 6 digit OTP</p>
              </div>
              <div className="otpInputFieldCon">
                {otp.map((el, index) => {
                  return (
                    <input
                      className="otpInputField"
                      type="text"
                      name="otp"
                      maxLength={1}
                      key={index}
                      value={el}
                      onChange={(e) => handleOtpInput(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
              </div>
              {otpTimeOut ? (
                <p style={{ color: "#838696" }}>
                  Waiting for OTP {otpTimeOut}sec
                </p>
              ) : (
                <p
                  className="resetOTP"
                  style={{
                    textAlign: "right",
                    color: "#dd4e46",
                    cursor: "pointer",
                  }}
                  onClick={() => setCheckSubmit(false)}
                >
                  resend OTP
                </p>
              )}

              <button className="submitOTP">VERIFY</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Create Account</h2>
          <form onSubmit={handleSubmitForm}>
            <div style={{ marginTop: "2vh" }}>
              <div className="addNumberCon">
                <p> EMAIL ID </p>
                <div className="numberInputDiv">
                  <input
                    type="email"
                    placeholder="Enter your Email Id"
                    style={{ textIndent: "0" }}
                    // value={mobileNumber}
                    // onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>

                <p className="invalidInput">{errorMsg}</p>
              </div>
              <div className="addNumberCon">
                <p>FIRST NAME</p>
                <div className="numberInputDiv">
                  <input
                    type="text"
                    placeholder="Your First Name"
                    style={{ textIndent: "0" }}
                    // value={mobileNumber}
                    // onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>

                <p className="invalidInput">{errorMsg}</p>
              </div>
              <div className="addNumberCon">
                <p>LASTNAME</p>
                <div className="numberInputDiv">
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    style={{ textIndent: "0" }}
                    // value={mobileNumber}
                    // onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                <p className="invalidInput">{errorMsg}</p>
              </div>
            </div>
            <p style={{ color: "#838696", marginBottom: "1vh" }}>
              VERIFYING NUMBER
            </p>

            {/* OTP CONTAINER */}
            <div className="otpSubmitContainer">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ color: "#838696" }}>
                  We have sent 6 digit OTP on
                  <span
                    style={{
                      fontWeight: "500",
                      color: "black",
                      fontSize: "1.5vh",
                    }}
                  >
                    {" "}
                    +91-{mobileNumber}
                  </span>
                </p>
                <p
                  onClick={() => {
                    setCheckSubmit(false);
                    setMobileNumber("");
                    setUserAuth(false);
                    clearInterval(id.current);
                  }}
                  style={{ color: "#dd4e46", cursor: "pointer" }}
                >
                  change
                </p>
              </div>
              <div className="otpInputFieldCon">
                {otp.map((el, index) => {
                  return (
                    <input
                      className="otpInputField"
                      type="text"
                      name="otp"
                      maxLength={1}
                      key={index}
                      value={el}
                      onChange={(e) => handleOtpInput(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
              </div>
              {otpTimeOut ? (
                <p style={{ color: "#838696" }}>
                  Waiting for OTP {otpTimeOut}sec
                </p>
              ) : (
                <p
                  className="resetOTP"
                  style={{
                    textAlign: "right",
                    color: "#dd4e46",
                    cursor: "pointer",
                  }}
                  onClick={() => setCheckSubmit(false)}
                >
                  resend OTP
                </p>
              )}

              <button type="submit" className="submitOTP">
                VERIFY
              </button>
            </div>
          </form>
        </>
      )}
      {/* {!checkSubmit && (
        <button className="submitOTP" onClick={handleSubmit}>
          USE OTP
        </button>
      )} */}
      {/* OTP Fields */}
      {/* {checkSubmit && (
        <div className="otpSubmitContainer">
          <div style={{ display: "flex", justifyContent: "space-btween" }}>
            <p style={{ color: "#838696" }}>
              We have sent 6 digit OTP on +91${mobileNumber}
            </p>
            <p
              onClick={() => {
                setCheckSubmit(false);
                setMobileNumber("");
                setUserAuth(false);
                clearInterval(id.current);
              }}
              style={{ color: "#dd4e46", cursor: "pointer" }}
            >
              change
            </p>
          </div>
          <div className="otpInputFieldCon">
            {otp.map((el, index) => {
              return (
                <input
                  className="otpInputField"
                  type="text"
                  name="otp"
                  maxLength={1}
                  key={index}
                  value={el}
                  onChange={(e) => handleOtpInput(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          {otpTimeOut ? (
            <p style={{ color: "#838696" }}>Waiting for OTP {otpTimeOut}sec</p>
          ) : (
            <p
              className="resetOTP"
              style={{
                textAlign: "right",
                color: "#dd4e46",
                cursor: "pointer",
              }}
              onClick={() => setCheckSubmit(false)}
            >
              resend OTP
            </p>
          )}

          <button className="submitOTP">VERIFY</button>
        </div>
      )} */}

      {/* //Social Login */}
      {!checkSubmit ? (
        <div className="socialLoginCon">
          <div>
            <Link to={"#"} className="socialLogin">
              <img
                src="https://www.netmeds.com/msassets/images/icons/google-icon.png"
                alt=""
              />
              <span>Google</span>
            </Link>
            <Link to={"#"} className="socialLogin">
              <img
                src="https://www.netmeds.com/msassets/images/icons/facebook-icon.png"
                alt=""
              />
              <span>Facebook</span>
            </Link>
          </div>
        </div>
      ) : userAuth ? (
        <div className="socialLoginCon">
          <div>
            <Link to={"#"} className="socialLogin">
              <img
                src="https://www.netmeds.com/msassets/images/icons/google-icon.png"
                alt=""
              />
              <span>Google</span>
            </Link>
            <Link to={"#"} className="socialLogin">
              <img
                src="https://www.netmeds.com/msassets/images/icons/facebook-icon.png"
                alt=""
              />
              <span>Facebook</span>
            </Link>
          </div>
        </div>
      ) : (
        <p></p>
      )}
      {/* </div> */}
    </OTPdiv>
  );
};

const Login = () => {
  return (
    <Wrapper>
      <div className="imgCon">
        <img
          src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
          alt="Login-Templete"
        />
      </div>
      <div className="signInForm">
        <OTP />
      </div>
    </Wrapper>
  );
};

export default Login;
