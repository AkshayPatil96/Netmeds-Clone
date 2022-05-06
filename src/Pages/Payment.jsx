import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 65%;
  margin: auto;
  margin-top: 35px;

  .payHead {
    background-color: #151b39;
    padding: 6px 15px;
    border-radius: 10px;
    color: #fff;
  }
`;
const PaymentDiv = styled.div`
  display: flex;
`;
const PayPrefer = styled.div`
  width: 70%;
  margin: 20px 0px;
  img{
      width:30px;
      height:30px;
      margin-right:10px;
  }
`;
const PaymetPM = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 20px 15px 20px;
`;
const PaymetPDiv = styled.div`
  display:flex;
  justify-content: space-between;
  label{
    position: relative;
    top: -10px;
  }
  .lnk{
    color:red;
    font-weight:650;
    font-size:12px;
  }
`
const PaymetWallet = styled.div`
  margin-top: 15px;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 20px 15px 20px;
`;
const PatyDetail = styled.div`
  width: 30%;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 0 0 25px;
  padding: 20px 9px;
  position: sticky;
  top: 0;
  z-index: 1020;
  font-size: 14px;
  line-height: 2;
  height: 180px;

  div {
    padding: 0 7px;
  }
`;
const PayT = styled.div`
  span + span {
    float: right;
  }
`;
const PayS = styled.div`
  span {
    font-weight: bold;
  }
  span + span {
    float: right;
  }
`;
const PatTS = styled.div`
  background-color: #cfdaad;
  color: #489231;
  font-weight: bold;
  font-size: 12px;
  p {
    padding: 5px;
  }
`;

const Payment = () => {
  return (
    <div>
      <Wrapper>
        <div className="payHead">
          <div>
            <h2>Payment Details</h2>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <PaymentDiv>
          <PayPrefer>
            <PaymetPM>
              <p>PREFERED PAYMENT</p>
              <PaymetPDiv>
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/Paytm_lo.png"
                    alt="paytm"
                  />
                  <label>Paytm</label>
                </div>
                <div>
                  <Link to="/" className="lnk">LINK</Link>
                </div>
              </PaymetPDiv>
              <hr />
              <PaymetPDiv>
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/Mobikwik_lo.png"
                    alt="mobi"
                  />
                  <label>MobiKwik</label>
                </div>
                <div>
                  <Link to="/" className="lnk">LINK</Link>
                </div>
              </PaymetPDiv>
            </PaymetPM>
            <PaymetWallet>
              <p>WALLET</p>
              <PaymetPDiv >
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/Free_Charge_lo.png"
                    alt="Frechagre"
                  />
                  <label>Freecharge PayLater | Wallet</label>
                </div>
                <div>
                  <Link to="/" className="lnk">LINK</Link>
                </div>
              </PaymetPDiv>
              <hr />
              <PaymetPDiv>
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/amazonpay_new.png"
                    alt="
                    Amazon Pay"
                  />
                  <label>Amazon Pay</label>
                </div>
                <div>
                  <input type="radio" name="" className="A" />
                </div>
              </PaymetPDiv>
            </PaymetWallet>
            {/*Other payment */}
            <div>
              <p>OTHER PAYMENTS</p>
              <div>
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png"
                    alt="Phonepe"
                  />
                  <label>PhonePe</label>
                </div>
                <div></div>
              </div>
            </div>

            {/*UPI */}
            <div>
              <p>UPI</p>
              <div>
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/googlepaylogo.png"
                    alt="gPay"
                  />
                  <label>Google Pay</label>
                </div>
                <div></div>
              </div>
            </div>
            {/*Credit and debit */}
            <div>
              <p>CREDIT & DEBIT CARDS</p>
              <div></div>
            </div>
            {/*Cod */}
            <div>
              <p>Cash on Delivery</p>
              <p>
                Hear us out! Pay online and earn 100% NMS SuperCash (up to Rs.
                3000)on all prepaid orders
              </p>
            </div>
          </PayPrefer>
          <PatyDetail>
            <p
              style={{
                padding: "0px 14px",
                fontSize: "13px",
                fontWeight: "650",
                marginTop: "2px",
              }}
            >
              PAYMENT DETAILS
            </p>
            <div>
              <PayT>
                <span>MRP Total</span>
                <span>Rs.1,234.00</span>
                {/* //Data of price */}
              </PayT>
              <PayT>
                <span>Netmeds Discount</span>
                <span>- Rs.163.12</span>
              </PayT>
              <PayS>
                <span>Total Amount*</span>
                <span>Rs.1070.88</span>
              </PayS>
            </div>
            <PatTS>
              <p>TOTAL SAVINGS RS.163.12</p>
            </PatTS>
          </PatyDetail>
        </PaymentDiv>
      </Wrapper>
    </div>
  );
};

export default Payment;
