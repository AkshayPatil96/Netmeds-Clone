import React from "react";
import { Navbar } from "../Components/Navbar";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
`;

const Login = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Wrapper>
        <div>
          <img
            src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
            alt=""
          />
        </div>
        <div>
          <div>
            <h2>Sign In / Sign Up</h2>
            <p>
              Sign up or Sign in to access your orders, special offers, health
              tips and more!
            </p>
          </div>

          <div>
            <p>PHONE NUMBER</p>
            <div>
              <label>+91</label>
              <input type="text" name="" placeholder="Enter your mobile no" />
            </div>
            <hr />
            <div>
                <button>USE OTP</button>
            </div>
          </div>

        <div>
            <div></div>
            <div></div>
        </div>

        </div>
      </Wrapper>
      <div></div>
    </div>
  );
};

export default Login;
