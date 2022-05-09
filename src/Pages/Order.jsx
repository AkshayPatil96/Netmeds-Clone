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
  Productt,
  P1,
  Add,
  Product,
} from "../Components/Cart.styled";
import { Link } from "react-router-dom";
import CardProducts from "../Components/CartProducts";
import "../Components/Carts.css";

let dis = localStorage.getItem("discount") || "";

const Order = () => {
  const [totals, setTotal] = useState(0);
  const [addtogle, setAddtogle] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [promotoggle, setPromotoggle] = useState(false);
  const [discount, setdiscount] = useState(0);
  let [FromData, setFromData] = useState([{}]);
  const handdone = (e) => {
    const inpuName = e.target.className;

    setFromData({ ...FromData, [inpuName]: e.target.checked });

    setFromData({ ...FromData, [inpuName]: e.target.value });
    console.log(FromData);
  };
  const handsubm = (e) => {
    e.preventDefault(e);
    console.log(FromData);
  };
  return (
    <>
      {addtogle ? (
        <Add>
          <div
            style={{
              display: "flex",
              marginLeft: "20px",
              marginRight: "20px",
              justifyContent: "space-between",
              color: "#292f4a",
              padding: "10px",
              paddingBottom: "0px",
            }}
          >
            <h4> ADD ADDRESS</h4>
            <img
              onClick={() => setAddtogle(false)}
              src="	https://www.netmeds.com/msassets/images/icons/close.svg"
            />
          </div>
          <form onSubmit={handsubm}>
            <div className="form">
              <div className="input-container ic2">
                <input
                  id="firstname"
                  className="pincode"
                  type="text"
                  placeholder=" "
                  value={FromData.className}
                  onChange={handdone}
                  required
                />
                <div className="cut"></div>
                <label for="firstname" className="placeholder">
                  Pin Code
                </label>
                <hr
                  style={{
                    backgroundColor: "whitesmoke",
                    height: "0px",
                    marginTop: "0px",
                    width: "100%",
                    marginLeft: "20px",
                  }}
                ></hr>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{ marginRight: "20px" }}
                  className="input-container ic1"
                >
                  <input
                    id="firstname"
                    className="input"
                    type="text"
                    placeholder=" "
                    value={FromData.className}
                    onChange={handdone}
                    required
                  />
                  <div className="cut"></div>
                  <label for="firstname" className="placeholder">
                    City
                  </label>
                  <hr
                    style={{
                      backgroundColor: "whitesmoke",
                      height: "0px",
                      marginTop: "0px",
                      width: "100%",
                      marginLeft: "20px",
                    }}
                  ></hr>
                </div>

                <div className="input-container ic1">
                  <input
                    id="firstname"
                    className="state"
                    type="text"
                    placeholder=" "
                    onChange={handdone}
                    required
                  />
                  <div className="cut"></div>
                  <label for="firstname" className="placeholder">
                    State
                  </label>
                  <hr
                    style={{
                      backgroundColor: "whitesmoke",
                      height: "0px",
                      marginTop: "0px",
                      width: "100%",
                      marginLeft: "20px",
                    }}
                  ></hr>
                </div>
              </div>
              <div className="input-container ic1">
                <input
                  id="firstname"
                  className="firstname"
                  type="text"
                  placeholder=" "
                  onChange={handdone}
                  required
                />
                <div className="cut"></div>
                <label for="firstname" className="placeholder">
                  First name
                </label>
                <hr
                  style={{
                    backgroundColor: "whitesmoke",
                    height: "0px",
                    marginTop: "0px",
                    width: "100%",
                    marginLeft: "20px",
                  }}
                ></hr>
              </div>
              <div className="input-container ic2">
                <input
                  id="lastname"
                  className="lastname"
                  type="text"
                  placeholder=" "
                  onChange={handdone}
                  required
                />
                <div className="cut"></div>
                <label for="lastname" className="placeholder">
                  Last name
                </label>
                <hr
                  style={{
                    backgroundColor: "whitesmoke",
                    height: "0px",
                    marginTop: "0px",
                    width: "100%",
                    marginLeft: "20px",
                  }}
                ></hr>
              </div>
              <div className="input-container ic2">
                <input
                  id="email"
                  className="add"
                  type="text"
                  placeholder=" "
                  onChange={handdone}
                  required
                />
                <div className="cut cut-short"></div>
                <label for="email" className="placeholder">
                  Address
                </label>
                <hr
                  style={{
                    backgroundColor: "whitesmoke",
                    height: "0px",
                    marginTop: "0px",
                    width: "100%",
                    marginLeft: "20px",
                  }}
                ></hr>
              </div>
              <div className="input-container ic2">
                <input
                  id="email"
                  className="landmark"
                  type="text"
                  placeholder=" "
                  onChange={handdone}
                  required
                />
                <div className="cut cut-short"></div>
                <label for="email" className="placeholder">
                  Landmark
                </label>
                <hr
                  style={{
                    backgroundColor: "whitesmoke",
                    height: "0px",
                    marginTop: "0px",
                    width: "100%",
                    marginLeft: "20px",
                  }}
                ></hr>
              </div>
              <div className="input-container ic2">
                <input
                  id="email"
                  className="phone"
                  type="number"
                  placeholder=" "
                  onChange={handdone}
                  required
                />
                <div className="cut cut-short"></div>
                <label for="email" className="placeholder">
                  Phone Number
                </label>
                <hr
                  style={{
                    backgroundColor: "whitesmoke",
                    height: "0px",
                    marginTop: "0px",
                    width: "100%",
                    marginLeft: "20px",
                  }}
                ></hr>
              </div>
              <button
                type="text"
                className="submit"
                onClick={() => setAddtogle(false)}
              >
                Add Address
              </button>
            </div>
          </form>
        </Add>
      ) : (
        ""
      )}
      <Cardmain>
        <div
          style={{
            width: "73%",
            backgroundColor: "#151b39",
            height: "70px",
            margin: "auto",
            marginTop: "70px",
            borderRadius: "15px",
            display: "flex",
            color: "white",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Order Review</h2>
          <div style={{ marginLeft: "50%" }}>
            <img
              style={{
                width: "30px",
                height: "30px",
                marginTop: "9px",
                marginLeft: "7px",
              }}
              src="https://www.netmeds.com/msassets/images/icons/shopping-cart-added-white.svg"
            />
            <h6 style={{ marginTop: "0px" }}>Your Cart</h6>
          </div>

          <div
            style={{
              backgroundColor: "white",
              height: "2px",
              width: "50px",
              marginTop: "35px",
            }}
          ></div>
          <div>
            <img
              style={{
                width: "30px",
                height: "30px",
                marginTop: "9px",
                marginLeft: "12px",
              }}
              src="https://www.netmeds.com/msassets/images/icons/order-in-process-white.svg"
            />
            <h6 style={{ marginTop: "0px" }}>Order Review</h6>
          </div>
          <div
            style={{
              backgroundColor: "gray",
              height: "2px",
              width: "50px",
              marginTop: "35px",
            }}
          ></div>
          <div style={{ justifyContent: "center" }}>
            <img
              style={{
                width: "30px",
                height: "30px",
                marginTop: "9px",
                marginLeft: "17px",
              }}
              src="https://www.netmeds.com/msassets/images/icons/rupee_white_icon.svg"
            />
            <h6 style={{ marginTop: "0px", color: "gray" }}>Payment Details</h6>
          </div>
        </div>
        <Carddiv>
          <CardProduct>
            <Product>
              <P1>PRODUCTS</P1>
              <CardProducts
                totals={totals}
                setTotal={setTotal}
                discount={discount}
                setdiscount={setdiscount}
              />
            </Product>
            {!addtogle && FromData.pincode ? (
              <Productt>
                <P1>DELIVERY ADDRESS</P1>
                <div style={{ marginLeft: "25px" }}>
                  <h4>{`${FromData.firstname} ${FromData.lastname}`}</h4>
                  <p>{FromData.add},</p>
                  <p>{FromData.landmark},</p>
                  <p>{`${FromData.input}-${FromData.pincode},${FromData.state}`}</p>
                  <p>+91-{FromData.phone}</p>
                </div>
              </Productt>
            ) : (
              ""
            )}
          </CardProduct>
          <CardTotal>
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
                  <p>-Rs {dis}</p>
                  <p>Rs {totals - dis}</p>
                </div>
              </TotalSub>
              <TotalSaving>{`TOTAL SAVINGS  RS ${dis}`}</TotalSaving>
              <TotalSub>
                <div>
                  <P>TOTAL AMOUNT</P>
                  <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>
                    Rs {totals - totals * discount}
                  </h3>
                </div>
                <div>
                  <Button>
                    <Link
                      to="/payment"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Pay
                    </Link>
                  </Button>
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
                <spam> IMPORTANT UPDATE :</spam> Due to the current Covid 19
                situation, we cannot commit to our mentioned delivery dates. We
                are working hard to meet the unprecedented demand and we thank
                you for your patience.
              </p>
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
    </>
  );
};

export default Order;
