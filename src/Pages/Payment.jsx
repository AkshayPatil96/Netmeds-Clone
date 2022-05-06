import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 65%;
  margin: auto;
  margin-top:35px;
  
  .payHead{
      background-color:#151b39;
      padding:6px 15px;
      border-radius: 10px;
      color:#fff;
  }


`;
const PaymentDiv = styled.div`
  display: flex;
`;
const PayPrefer = styled.div`
  width: 70%;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 0px;
`;
const PatyDetail = styled.div`
  width: 30%;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 0 0 25px;
  padding: 20px;
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
            <div>
              <p>PREFERED PAYMENT</p>
              <div></div>
              <hr />
              <div></div>
            </div>
            <div>
              <p>WALLET</p>
              <div></div>
              <hr />
              <div></div>
            </div>
            <div>
              <p>OTHER PAYMENTS</p>
              <div></div>
            </div>
            <div>
              <p>UPI</p>
              <div></div>
            </div>
            <div>
              <p>CREDIT & DEBIT CARDS</p>
              <div></div>
            </div>
            <div></div>
            <div></div>
            <div>
              <p>Cash on Delivery</p>
              <p>
                Hear us out! Pay online and earn 100% NMS SuperCash (up to Rs.
                3000)on all prepaid orders
              </p>
            </div>
          </PayPrefer>
          <PatyDetail>
            <p>PAYMENT DETAILS</p>
            <div>
              <div>
                <span>MRP Total</span>
                <span>Rs. 1234.00</span>
              </div>
              <div>
                <span>Netmeds Discount</span>
                <span>-Rs,163.12</span>
              </div>
              <div>
                <span>Total Amount</span>
                <span>Rs.1070.88</span>
              </div>
            </div>
            <div>
              <p>TOTAL SAVINGS RS.163.12</p>
            </div>
            <div>
              <p>
                Netmeds is a technology platform to facilitate transaction of
                business. The products and services are offered for sale by the
                sellers. The user authorizes the delivery personnel to be his
                agent for delivery of the goods. For details read Terms &
                Conditions
              </p>
            </div>
          </PatyDetail>
        </PaymentDiv>
      </Wrapper>
    </div>
  );
};

export default Payment;
