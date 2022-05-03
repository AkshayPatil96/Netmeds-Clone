import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleUser,
  faCartShopping,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
const NavContainer = styled.nav`
  height: 9.85vh;
  width: 100%;

  background-color: #5bafb1;

  .navContainer {
    height: 100%;
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;

    /* div {
      border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
    } */

    .navLogo {
      width: 22%;
      height: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-right: 35px;
      justify-content: flex-end;
    }

    .navSearch {
      width: 34.89vw;

      height: 5.25vh;
      display: flex;
      box-sizing: border-box;
      padding: 3px;
      background-color: #ffffff;
      border-radius: 8px;
      color: #9093b4;
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 22px;

      .navLocation {
        height: 100%;
        width: 8.33vw;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        p {
          margin: 0;
        }
        .pinCode {
          font-size: 14px;
          color: #24aeb1;
          font-weight: bold;
        }
      }

      .searchCon {
        flex-grow: 1;

        input {
          width: 99%;
          height: 97%;
          border: 0;
          font-size: 0.9rem;
          text-indent: 10px;
        }

        .search:focus {
          outline: none;
        }
      }
    }

    .userUtilities > ul {
      list-style: none;
      display: flex;
      gap: 30px;

      li > * {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .navLinks {
        text-decoration: none;
        font-size: 14px;
        color: #e3fdff;
        font-weight: bold;

        p {
          margin-left: 8px;
        }

        .navIcons {
          width: 25px;
          font-size: 30px;
          color: white;
        }
      }
    }
  }
`;

const SubNavContainer = styled.div`
  height: 6.8vh;
  width: 100%;

  background-color: #5bafb1;

  .firstDiv {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    ul {
      list-style: none;
      display: flex;
      gap: 100px;

      li > * {
        display: flex;

        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: #ffffff;

        padding: 5px;
      }

      .downArrowIcon {
        font-size: 10px;
      }
    }
    p {
      margin: 0;

      font-size: 14px;
      line-height: 46px;
    }
  }

  .secondDiv {
    width: 100%;
    height: 4.6vh;

    ul {
      list-style: none;
      display: flex;
      gap: 25px;
      height: 100%;

      align-items: center;
      font-size: 14px;
      justify-content: center;
      margin: 0;

      li > * {
        color: #151b39;
        text-decoration: none;
      }
    }
  }
`;

export const Navbar = () => {
  return (
    <NavContainer>
      <div className="navContainer">
        <div className="navLogo">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className="navSearch">
          {/* <div className="navSearchBarCon"> */}
          <div className="navLocation">
            <p>Dilever to </p>
            <p className="pinCode">361001</p>
            <img src={ArrowDown} alt="" />
          </div>
          <hr />
          <div className="searchCon">
            <input
              type="text"
              name="search"
              className="search"
              placeholder="Search for medicine & wellness products..."
            />
            <div className="navSearchResults"></div>
          </div>
          {/* </div> */}
        </div>
        <div className="userUtilities">
          <ul>
            <li>
              <Link className="navLinks" to="#">
                <img
                  src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"
                  alt="doccuments"
                  className="navIcons"
                />
                <p>Upload</p>
              </Link>
            </li>
            <li>
              <Link to="#" className="navLinks">
                {/* <img src={cartIcon} alt="" className="navIcons" /> */}
                <FontAwesomeIcon icon={faCartShopping} className="navIcons" />
                <p>Cart</p>
              </Link>
            </li>
            <li>
              <Link to="#" className="navLinks">
                <FontAwesomeIcon icon={faCircleUser} className="navIcons" />
                {/* <img src={AccountIcon} alt="" className="navIcons" /> */}
                <p>Sign in / Sign up</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavContainer>
  );
};

export const SubNav = () => {
  return (
    <SubNavContainer>
      <div className="firstDiv">
        <ul>
          <li>
            <Link to={"#"}>
              <img
                src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/medicine.svg"
                alt=""
              />
              <p>Medicine</p>
              <FontAwesomeIcon icon={faCaretDown} className="downArrowIcon" />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"
                alt=""
              />
              <p>Wellness</p>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg"
                alt=""
              />
              <p>Lab Tests</p>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg"
                alt=""
              />
              <p>Beuty</p>
              <FontAwesomeIcon icon={faCaretDown} className="downArrowIcon" />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img
                src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/health-library.svg"
                alt=""
              />
              <p>Health Coener</p>
              <FontAwesomeIcon icon={faCaretDown} className="downArrowIcon" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="secondDiv">
        <ul>
          <li>
            <Link to={"#"}>COVID Essentials</Link>
          </li>
          <li>
            <Link to={"#"}>Diabetes</Link>
          </li>
          <li>
            <Link to={"#"}>Eyewear</Link>
          </li>
          <li>
            <Link to={"#"}>Ayush</Link>
          </li>
          <li>
            <Link to={"#"}>Ayurvedic</Link>
          </li>
          <li>
            <Link to={"#"}>Homeopathy</Link>
          </li>
          <li>
            <Link to={"#"}>Fitness</Link>
          </li>
          <li>
            <Link to={"#"}>Mom & Baby</Link>
          </li>
          <li>
            <Link to={"#"}>Devices</Link>
          </li>
          <li>
            <Link to={"#"}>Surgical</Link>
          </li>
          <li>
            <Link to={"#"}>Sexual Wellness</Link>
          </li>
          <li>
            <Link to={"#"}>Treatments</Link>
          </li>
        </ul>
      </div>
    </SubNavContainer>
  );
};
