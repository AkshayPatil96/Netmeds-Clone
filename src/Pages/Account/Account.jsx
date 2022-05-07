import React from "react";
import { AccountContainer } from "./account.styled.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
const Account = () => {
  return (
    <AccountContainer>
      <h2 style={{ marginLeft: "10px" }}>Your Account</h2>
      <div className="gridContainer">
        {/* Profile Data */}
        <div className="profileDetails">
          <img
            width={"15%"}
            src="https://www.netmeds.com/msassets/images/icons/profile-icon.svg"
            alt=""
          />
          <div>
            <h2>Gautam Gohil</h2>
            <p style={{ fontStyle: "italic" }}>gautamgohil0@gmail.com</p>
            <p>+91-9824240421</p>
          </div>
        </div>
        {/* Payment Opt */}
        <div className="paymentOptionsContainer">
          <div>
            <img
              src="https://www.netmeds.com/msassets/images/icons/payment_history.svg"
              alt=""
            />
            <p>Payment Methods</p>
          </div>
          <div>
            <img
              src="https://www.netmeds.com/msassets/images/icons/medicine_orders.svg"
              alt=""
            />
            <p>Medicine Orders</p>
          </div>
          <div>
            <img
              src="https://www.netmeds.com/msassets/images/icons/rewards.svg"
              alt=""
            />
            <p>My Rewards</p>
          </div>
        </div>
        {/* Account Opt */}
        <div className="accountOptions">
          <ul>
            <li>
              <div>
                <img
                  className="optionIcon"
                  src="https://www.netmeds.com/msassets/images/icons/account_information_blue.svg"
                  alt=""
                />
                <Link className="links" to={"#"} style={{ fontWeight: "bold" }}>
                  Account Information
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <img
                  className="optionIcon"
                  src="https://www.netmeds.com/msassets/images/icons/wallet_grey.svg"
                  alt=""
                />
                <Link className="links" to={"#"}>
                  My Wallet
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/favorite.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  My WishList
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/offer_inactive.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  Offers
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/netmeds-elite_inactive.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  Netmeds First
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/delivery_inactive.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  Delivery Addresses
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/my-prescription_inactive.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  My Prescription
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    style={{ width: "30px" }}
                    src="https://www.netmeds.com/msassets/images/icons/subscription_grey.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  My Subscriptions
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    style={{ width: "30px" }}
                    src="https://www.netmeds.com/msassets/images/icons/refer_earn_grey.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  Refer & Earn
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/support_inactive.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  Help
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/document_inactive.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  Legal Information
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>

            <li>
              <div>
                <span>
                  <img
                    style={{ width: "30px" }}
                    src="https://www.netmeds.com/msassets/images/icons/contact-us_grey.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  Contact Us
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/document_inactive.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  Rate us
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
            <li>
              <div>
                <span>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/lock_grey.svg"
                    alt=""
                  />
                </span>
                <Link className="links" to={"#"}>
                  Logout
                </Link>
              </div>
              <img
                src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="infoReletedTo">
          <div>
            <div className="loginInfo">
              <p>LOGIN INFORMATION</p>
              <div>
                <label>EMAIL</label>
                <p>gautamgohil0@gmail.com</p>
              </div>
              <div>
                <label>MOBILE NUMBER</label>
                <p>+91-9824240421</p>
              </div>
            </div>
            <div className="personalInfo">
              <p>PERSONAL INFORMATION</p>
              <div>
                <label>FUll NAME</label>
                <p>Gautam Gohil</p>
              </div>
              <div>
                <label>GENDER</label>
                <p>No-data</p>
              </div>
              <div>
                <label>AGE</label>
                <p>22</p>
              </div>
              <div className="buttonToModify">
                <button>Modify</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountContainer>
  );
};

export default Account;
