import React, { useState } from "react";
import {
  Cardmain,
  Carddiv,
  CardProduct,
  CardTotal,
  ApplyPromo,
  P,
  Total,
  TotalSub,
  TotalSaving,
  Button,
  Product,
  P1,
} from "../Components/Cart.styled";
import Carousel from "../Components/Carousel/Carousel";
import CardProducts from "../Components/CartProducts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data, NextBtn, PreviousBtn } from "../Components/Carousel/Data";
import "../Components/Carts.css";

const Cart = () => {
  const [totals, setTotal] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [promotoggle, setPromotoggle] = useState(false);
  const [discount, setdiscount] = useState(0);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Cardmain>
      <h1 style={{ margin: "50px 50px 10px 290px", padding: "15px" }}>
        Order Summary
      </h1>
      <Carddiv>
        <CardProduct>
          <div style={{ width: "100%", marginTop: "0px", borderRedius: "5px" }}>
            <Carousel />
          </div>
          <Product>
            <P1>PRODUCTS</P1>
            <CardProducts
              totals={totals}
              setTotal={setTotal}
              discount={discount}
              setdiscount={setdiscount}
            />
            <div
              style={{
                color: "#24aeb1",
                display: "flex",
                marginLeft: "20px",
                justifyContent: "space-between",
                marginRight: "20px",
              }}
            >
              <h4>ADD MORE ITEMS</h4>
              <h3>
                <button
                  style={{
                    color: "#24aeb1",
                    border: "none",
                    backgroundColor: "white",
                    fontSize: "30px",
                  }}
                >
                  +
                </button>
              </h3>
            </div>
          </Product>
        </CardProduct>
        <CardTotal>
          <ApplyPromo>
            <P>APPLY PROMOCODE / NMS SUPERCASH</P>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                marginLeft: "10px",
                color: "gray",
              }}
            >
              <input
                class="red-input"
                type="checkbox"
                onClick={() => setPromotoggle(!promotoggle)}
              />
              <label>Apply Promo Code</label>
            </div>
            <p
              style={{
                marginLeft: "68px",
                marginRight: "40px",
                fontSize: "12px",
                color: "gray",
                marginBottom: "20px",
              }}
            >
              Get flat discount! Vouchers applicable in payment options.
            </p>
            {promotoggle ? (
              <div>
                <div
                  style={{
                    borderStyle: "dotted",
                    border: "1px dotted gray",
                    background: "#f3f7fb",
                    margin: "auto",
                    width: "90%",
                    marginBottom: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      marginLeft: "-5px",
                      color: "gray",
                    }}
                  >
                    <input
                      class="red-input"
                      type="checkbox"
                      onClick={() => setdiscount(0.25)}
                    />
                    <label> FULL100</label>
                  </div>
                  <p
                    style={{
                      marginLeft: "52px",
                      marginRight: "40px",
                      fontSize: "12px",
                      color: "gray",
                      marginTop: "0px",
                    }}
                  >
                    Get flat 25% off on meds + 100% NMS SuperCash on your First
                    meds order. No minimum order value.
                  </p>
                </div>
                <div
                  style={{
                    borderStyle: "dotted",
                    border: "1px dotted gray",
                    background: "#f3f7fb",
                    margin: "auto",
                    width: "90%",
                    marginBottom: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      marginLeft: "-5px",
                      color: "gray",
                    }}
                  >
                    <input
                      class="red-input"
                      type="checkbox"
                      onClick={() => setdiscount(0.2)}
                    />
                    <label> DUO100</label>
                  </div>
                  <p
                    style={{
                      marginLeft: "52px",
                      marginRight: "40px",
                      fontSize: "12px",
                      color: "gray",
                      marginTop: "0px",
                    }}
                  >
                    Get flat 20% off on meds + 100% NMS SuperCash on your meds
                    order. Minimum order value: Rs. 999.
                  </p>
                </div>
                <div
                  style={{
                    borderStyle: "dotted",
                    border: "1px dotted gray",
                    background: "#f3f7fb",
                    margin: "auto",
                    width: "90%",
                    marginBottom: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      marginLeft: "-5px",
                      color: "gray",
                    }}
                  >
                    <input
                      class="red-input"
                      type="checkbox"
                      onClick={() => setdiscount(0.15)}
                    />
                    <label> BOWL100</label>
                  </div>
                  <p
                    style={{
                      marginLeft: "52px",
                      marginRight: "40px",
                      fontSize: "12px",
                      color: "gray",
                      marginTop: "0px",
                    }}
                  >
                    Get flat 15% off on meds + 100% NMS SuperCash on your meds
                    order. No minimum order value
                  </p>
                </div>
                <p
                  style={{
                    color: "gray",
                    fontSize: "12px",
                    margin: "0px 0px 5px 10px",
                  }}
                >
                  <samp style={{ color: "black" }}>NOTE:</samp> Some medicines,
                  including eyewear, are eligible for ONLY up to 10% discount on
                  applying any coupon code.
                </p>
              </div>
            ) : (
              ""
            )}
          </ApplyPromo>
          <Total>
            <P>PAYMENT DETAILS</P>
            <TotalSub>
              <div>
                <p>MRP Total</p>
                <p>Netmeds Discount</p>
                <p>Total Amount*</p>
              </div>
              <div>
                <p> Rs {totals}</p>
                <p>-Rs {totals * discount}</p>
                <p>Rs {totals - totals * discount}</p>
              </div>
            </TotalSub>
            <TotalSaving>
              {`TOTAL SAVINGS  RS ${totals * discount}`}
            </TotalSaving>
            <TotalSub>
              <div>
                <P>TOTAL AMOUNT</P>
                <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>
                  Rs {totals - totals * discount}
                </h3>
              </div>
              <div>
                <Button>PROCEED</Button>
              </div>
            </TotalSub>
            <p
              style={{
                fontSize: "12px",
                margin: "30px 10px 10px 10px",
                color: "gray",
                fontStyle: "italic",
                textJustify: "auto",
              }}
            >
              Netmeds is a technology platform to facilitate transaction of
              business. The products and services are offered for sale by the
              sellers. The user authorizes the delivery personnel to be his
              agent for delivery of the goods. For details read{" "}
              <span style={{ color: "#2bb", fontWeight: "bold" }}>
                Terms & Conditions
              </span>
            </p>
          </Total>
        </CardTotal>
      </Carddiv>
    </Cardmain>
  );
};

export default Cart;
