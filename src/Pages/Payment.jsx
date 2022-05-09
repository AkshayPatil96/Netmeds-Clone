import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .statusCardStyle {
    position: fixed;
    top: -55px;
    right: 0px;
    z-index: 200;
    height: 100vh;
    border-radius: 0px;
  }
`;
const PaymetPM = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 20px 15px 20px;
`;
const PaymetPDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 30px 0;

  label {
    position: relative;
    top: -10px;
  }
  .lnk {
    color: red;
    font-weight: 650;
    font-size: 12px;
  }
  .inpRadio {
    float: right;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  p {
    padding: 0px 40px;
    font-size: 12px;
  }
  button {
    width: 200px;
    height: 40px;
    margin-top: 10px;
    border: none;
    background-color: #24aeb1;
    border-radius: 5px;
    color: #fff;
    font: 15px bold;
    cursor: pointer;
  }
`;
const PaymetGDiv = styled.div`
  display: flex;
  justify-content: space-between;
  marginbottom: 30px;
  label {
    position: relative;
    top: -10px;
  }
  .lnk {
    color: red;
    font-weight: 650;
    font-size: 12px;
  }
  .inpRadio {
    float: right;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  p {
    padding: 0px 40px;
    font-size: 12px;
  }
  button {
    width: 200px;
    height: 40px;
    margin-top: 10px;
    border: none;
    background-color: #24aeb1;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font: 15px bold;
  }
`;
const PaymetWallet = styled.div`
  margin-top: 15px;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 20px 15px 20px;
`;
const PaymetCod = styled.div`
  margin-top: 15px;
  background-color: #fff;
  border-radius: 10px;
  padding: 35px 20px;
  font-sixe: 12px;
  p {
    padding: 0px 40px;
    font-size: 12px;
  }
`;
const PatyDetail = styled.div`
  width: 30%;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 0 0 25px;
  padding: 20px 9px;
  position: sticky;
  top: 0;
  z-index: 100;
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

const CardDiv = styled.form`
  width: 300px;
  position: relative;
  float: right;
  text-align: left;
  font-size: 13px;
  .pText {
    width: 100%;
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
  }
`;
const ExpDiv = styled.div`
  display: flex;
  justifycontent: space-around;

  .pExp {
    width: 60px;
    border: 0;
    text-indent: 0.7vw;
    flex-grow: 1;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: black;
      font-size: 16px;
    }
  }
`;
const InpCvv = styled.input`
  width: 100px;
  border: 0;
  text-indent: 0.7vw;
  flex-grow: 1;
  &:focus {
    outline: none;
  }
`;
const PayBtn = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  border: none;
  background-color: #24aeb1;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;
let total = localStorage.getItem("totalPay");
console.log(total);
const Payment = () => {
  const [statusA, setStatusA] = useState(false);
  const [statusP, setStatusP] = useState(false);
  const [statusG, setStatusG] = useState(false);
  const [statusC, setStatusC] = useState(false);
  const [statusCard, setStatusCard] = useState(false);
  const navigate = useNavigate();

  const handlePayA = () => {
    setStatusA(true);
    setStatusP(false);
    setStatusC(false);
    setStatusG(false);
  };
  const handlePayP = () => {
    setStatusA(false);
    setStatusP(true);
    setStatusC(false);
    setStatusG(false);
  };
  const handlePayG = () => {
    setStatusG(true);
    setStatusP(false);
    setStatusC(false);
    setStatusA(false);
  };
  const handlePayC = () => {
    setStatusC(true);
    setStatusP(false);
    setStatusA(false);
    setStatusG(false);
  };
  const handleCard = () => {
    setStatusCard(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/delhivery");
  };

  return (
    <div>
      <Wrapper
        onDoubleClick={() => {
          setStatusCard(false);
        }}
      >
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
                  <Link to="/" className="lnk">
                    LINK
                  </Link>
                </div>
              </PaymetPDiv>
              <hr />
              <PaymetGDiv>
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/Mobikwik_lo.png"
                    alt="mobi"
                  />
                  <label>MobiKwik</label>
                  <p>
                    Get assured MobiKwik cashback up to Rs. 600 on orders above
                    Rs. 750. TCA.
                  </p>
                </div>
                <div>
                  <Link to="/" className="lnk">
                    LINK
                  </Link>
                </div>
              </PaymetGDiv>
            </PaymetPM>
            <PaymetWallet>
              <p>WALLET</p>
              <PaymetGDiv>
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/Free_Charge_lo.png"
                    alt="Frechagre"
                  />
                  <label>Freecharge PayLater | Wallet</label>
                  <p>
                    Get up to Rs. 30 Freecharge cashback (10%) on your
                    transaction using Freecharge wallet on Netmeds. Offer valid
                    ONCE per user till 31st May 2022. *T&C apply
                  </p>
                </div>
                <div>
                  <Link to="/" className="lnk">
                    LINK
                  </Link>
                </div>
              </PaymetGDiv>
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
                  {statusA ? (
                    <div>
                      <input
                        type="radio"
                        value="amazon"
                        name="pay"
                        className="inpRadio"
                        onClick={handlePayA}
                      />
                      <div>
                        <button>
                          PAY <span>RS.{total}</span>
                          {/*data */}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <input
                      type="radio"
                      value="amazon"
                      name="pay"
                      className="inpRadio"
                      onClick={handlePayA}
                    />
                  )}
                </div>
              </PaymetPDiv>
            </PaymetWallet>
            {/*Other payment */}

            <PaymetWallet>
              <p>OTHER PAYMENTS</p>
              <PaymetPDiv>
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png"
                    alt="Phonepe"
                  />
                  <label>PhonePe</label>
                </div>
                <div>
                  {statusP ? (
                    <div>
                      <input
                        type="radio"
                        value="phonePay"
                        name="pay"
                        className="inpRadio"
                        onClick={handlePayP}
                      />
                      <div>
                        <button>
                          Pay <span>Rs.{total}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <input
                      type="radio"
                      value="phonePay"
                      name="pay"
                      className="inpRadio"
                      onClick={handlePayP}
                    />
                  )}
                </div>
              </PaymetPDiv>
            </PaymetWallet>

            {/*UPI */}

            <PaymetWallet>
              <p>UPI</p>
              <PaymetPDiv>
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/googlepaylogo.png"
                    alt="gPay"
                  />
                  <label>Google Pay</label>
                </div>
                <div>
                  {statusG ? (
                    <div>
                      <input
                        type="radio"
                        value="gpay"
                        name="pay"
                        className="inpRadio"
                        onClick={handlePayG}
                      />
                      <div>
                        <button>
                          PAY <span>RS.{total}</span>
                          {/*data */}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <input
                      type="radio"
                      value="gPay"
                      name="pay"
                      className="inpRadio"
                      onClick={handlePayG}
                    />
                  )}
                </div>
              </PaymetPDiv>
            </PaymetWallet>

            {/*Credit and debit */}

            <PaymetWallet className={statusCard ? "statusCardStyle" : ""}>
              <p style={{ fontSize: "11px", fontWeight: "650" }}>
                {statusCard ? "" : "CREDIT & DEBIT CARDS"}
              </p>
              <hr style={{ margin: "22px 0" }} />
              <div
                style={{
                  textAlign: "center",
                  color: "#24aeb1",
                  fontWeight: "750",
                  cursor: "pointer",
                }}
              >
                <div>
                  {statusCard ? (
                    <CardDiv onSubmit={handleSubmit}>
                      <p style={{ color: "rgba(21,27,57,.6)" }}>
                        ENTER CARD DETAILS
                      </p>
                      <div>
                        <p>CARD NUMBER</p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="pText"
                          style={{ borderBottom: "2px solid #e4dede" }}
                          required
                        />
                      </div>
                      <ExpDiv>
                        <div>
                          <p>EXPIRY DATE</p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <input
                              type="text"
                              name=""
                              id=""
                              className="pExp"
                              style={{ borderBottom: "2px solid #e4dede" }}
                              placeholder="MM"
                              required
                            />
                            <input
                              type="text"
                              name=""
                              id=""
                              className="pExp"
                              style={{
                                borderBottom: "2px solid #e4dede",
                                marginLeft: "15px",
                              }}
                              placeholder="YY"
                              required
                            />
                          </div>
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                          <p>CVV</p>
                          <InpCvv
                            type="text"
                            name=""
                            style={{ borderBottom: "2px solid #e4dede" }}
                            required
                          ></InpCvv>
                        </div>
                      </ExpDiv>
                      <div>
                        <p>NAME ON CARD</p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="pText"
                          style={{ borderBottom: "2px solid #e4dede" }}
                          required
                        />
                      </div>
                      <div>
                        <PayBtn type="submit" value="PAY" onClick={()=>navigate("/delhivery")} />
                      </div>
                    </CardDiv>
                  ) : (
                    <p style={{ marginBottom: "8px" }} onClick={handleCard}>
                      ADD NEW CARD
                    </p>
                  )}
                </div>
              </div>
            </PaymetWallet>
            {/*Cod */}
            <PaymetCod>
              <PaymetGDiv>
                <div>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/COD.png"
                    alt="Frechagre"
                  />
                  <label>Cash on Delivery</label>
                  <p>
                    Hear us out! Pay online and earn 100% NMS SuperCash (up to
                    Rs. 3000) on all prepaid orders
                  </p>
                </div>
                <div>
                  {statusC ? (
                    <div>
                      <input
                        type="radio"
                        value="gpay"
                        name="pay"
                        className="inpRadio"
                        onClick={handlePayC}
                      />
                      <div>
                        <button
                          style={{ width: "auto" }}
                          onClick={() => navigate("/delhivery")}
                        >
                          PAY <span>RS.{total}</span> ON DELIVERY{/*data */}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <input
                      type="radio"
                      value="cod"
                      name="pay"
                      className="inpRadio"
                      onClick={handlePayC}
                    />
                  )}
                </div>
              </PaymetGDiv>
            </PaymetCod>
          </PayPrefer>

          {/*Payment detail  */}
          <PatyDetail>
            <div>
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
                  <span>Rs.{total}</span>
                  {/* //Data of price */}
                </PayT>
                <PayT>
                  <span>Netmeds Discount</span>
                  <span>- Rs.163.12</span>
                </PayT>
                <PayS>
                  <span>Total Amount*</span>
                  <span>Rs.{total}</span>
                </PayS>
              </div>
              <PatTS>
                <p>TOTAL SAVINGS RS.163.12</p>
              </PatTS>
            </div>
            <div style={{ marginTop: "35px", fontStyle: "italic" }}>
              <p style={{ fontSize: "10px" }}>
                Netmeds is a technology platform to facilitate transaction of
                business. The products and services are offered for sale by the
                sellers. The user authorizes the delivery personnel to be his
                agent for delivery of the goods. For details read
                <Link to="/"> Terms & Conditions</Link>
              </p>
            </div>
          </PatyDetail>
        </PaymentDiv>
      </Wrapper>
    </div>
  );
};

export default Payment;
