import React from "react";
import { Link, p } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.footer`
  width:85%;
  margin:auto;
  
`
const FooterTop = styled.div`
  display:flex;
  margin:30px 10px;
`
const Pmed = styled.p`
width:60%;
margin:auto;
left:-50px;
line-height:1.5;
color:rgba(11,18,25,.5);
font-size: 16px;
`
const FooterContainer = styled.div`
  display:flex;
  justify-content:space-between;
  margin:20px 0;
`

const Footer = () => {
  return (
    <div>
      <Wrapper>
        <FooterTop>
            <div><img src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg" alt="netmeds" /></div>
            <Pmed>Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha & Company – one of India’s
                most trusted pharmacies, with over 100 years’ experience in dispensing quality medicines.</Pmed>
        </FooterTop>
        <hr />
        <FooterContainer>
            <div>
                <h4>COMPANY</h4>
                <p>About Netmeds</p>
                <p>Customers Speak</p>
                <p>In the News</p>
                <p>Carrer</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Fees and Payments Policy</p>
                <p>Shipping and Delivery Policy</p>
                <p>Return, Refund and Cancellation Policy</p>
                <p>Contact</p>
            </div>
            <div>
                <h4>SHOPPING</h4>
                <p>Browse by A-Z</p>
                <p>Browse by Manufacturers</p>
                <p>Health Articles</p>
                <p>Offers / Coupons</p>
                <p>FAQs</p>
            </div>
            <div>
                <h4>SOCIAL</h4>
                <p>Patients Alike</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>pedIn</p>
                <p>Youtube</p>
                <p>Refer & Earn</p>
            </div>
            <div>
                <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                <p>Get a free subscription to our health and 
                    fitness tip and stay tuned to our latest offers
                </p>
                <input type="text" name="" placeholder="Enter your email address" />
                <hr />
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png" alt="gPlay" />
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png" alt="app store" />
            </div>
        </FooterContainer>
        <hr />
        <FooterContainer>
          <div><Link to="/">Medicine</Link></div>
          <div><Link to="/">Wellness</Link></div>
          <div><Link to="/">Lab Test</Link></div>
          <div><Link to="/">Beauty</Link></div>
          <div><p style={{margin:"0px"}}>Copyright© 2022. All Rights Reserved.</p></div>
        </FooterContainer>
      </Wrapper>
    </div>
  );
};

export default Footer;
