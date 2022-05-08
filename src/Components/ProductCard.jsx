import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { toCart } from "../Redux/Auth/action";

export const Card = styled.div`
  border-radius: 10px;
  margin: 5% 5%;
  padding: 5%;
  background: #fff;
  border: 1px solid #a0a0a0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  .link {
    color: #181e3c;
    text-decoration: none;
  }

  .title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    height: 38px;
    color: #181e3c;
    margin-bottom: 1%;
    font-size: 16px;
    padding: 0 0.5rem 0 0.7rem;
    text-align: start;
  }

  .seller {
    color: #777777;
    font-size: 14px;
    padding: 0 0.5rem 0 0.7rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2%;
  }

  .discount {
    position: absolute;
    display: inline-block;
    padding: 0.15rem 0.5rem;
    font-size: 0.65rem;
    letter-spacing: 0.05rem;
    font-weight: bold;
    background: #84be52;
    color: #ffffff;
    top: 4%;
    left: 5%;
  }

  .counter {
    margin: 3% 5%;
    font-size: 18px;
    line-height: 35px;
    text-align: center;
    padding: 0;
  }

  .minus {
    width: 150px;
    border: 1px solid #a0a0a0;
    padding: 2% 5%;
    color: #505050;
    border-radius: 50px;
    margin: 0 5%;
  }
  .count {
    border: 1px solid #a0a0a0;
    width: 50px;
    color: #505050;
    padding: 2% 5%;
    border-radius: 50px;
  }
  .plus {
    border: 1px solid #a0a0a0;
    width: 50px;
    color: #505050;
    padding: 2% 5%;
    border-radius: 50px;
    margin: 0 5%;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5em;
  padding: 0 0.5rem 0 0.7rem;
  align-items: center;
  margin-bottom: 8px;
  font-size: ${(props) => (props.orig ? "14px" : "16px")};
  font-weight: ${(props) => (props.orig ? "normal" : "bold")};
`;

const BUTTON = styled.div`
  margin: 3% 5%;
  /* border: 1px solid; */

  button {
    width: 100%;
    color: #fff;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    outline: none;
    background: linear-gradient(0deg, #24aeb1, #359b9c);
    border: none;
    line-height: 35px;
  }

  .btn-7 {
  }
  .btn-7 span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .btn-7:before,
  .btn-7:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: #24aeb1;
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
      -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  .btn-7:before {
    height: 0%;
    width: 2px;
  }
  .btn-7:after {
    width: 0%;
    height: 2px;
  }
  .btn-7:hover {
    color: #24aeb1;
    font-weight: bold;
    background: transparent;
  }
  .btn-7:hover:before {
    height: 100%;
  }
  .btn-7:hover:after {
    width: 100%;
  }
  .btn-7 span:before,
  .btn-7 span:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: #24aeb1;
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
      -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  .btn-7 span:before {
    width: 2px;
    height: 0%;
  }
  .btn-7 span:after {
    height: 2px;
    width: 0%;
  }
  .btn-7 span:hover:before {
    height: 100%;
  }
  .btn-7 span:hover:after {
    width: 100%;
  }
`;

const ProductCard = (props) => {
  const { id } = useParams();

  const [count, setCount] = useState(0);
  const [authCount, setAuthCount] = useState(false);
  const { user } = useSelector((state) => state.isAuth);
  console.log("user: ", user);

  const dispatch = useDispatch();

  const addToCart = () => {
    setAuthCount(true);
    // console.log();
    dispatch(toCart(props.id));
    setCount(1);
  };

  const handleChange = (value) => {
    let answer = count + value;
    if (answer > 0) {
      setAuthCount(true);
    } else {
      setAuthCount(false);
    }
    setCount(count + value);
    // console.log(count);
  };

  const discountPrice = Math.ceil(
    ((props.strikeOfPrice - props.salePrice) / props.strikeOfPrice) * 100
  );

  return (
    <>
      <Card
        onClick={() => {
          // console.log(props.id);
        }}
      >
        <Link to={`/product/${props.id}`} className="link">
          <img
            className="multi_image"
            src={props.imageUrl}
            alt=""
            style={{
              width: "100%",
              height: "170px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
          <p className="title">{props.title}</p>
          <p className="seller">Mkt: {props.seller}</p>
          <Price>
            <span className="static" style={{ color: "#696969" }}>
              Best Price*{" "}
            </span>
            <span
              style={{
                color: "green",
              }}
            >
              {`₹ ${props.salePrice}`}
            </span>
          </Price>
          <Price orig>
            {props.strikeOfPrice === undefined ? (
              <>
                <span style={{ color: "#696969" }}>MRP* </span>
                <span
                  style={{
                    color: "#696969",
                    textDecoration: "line-through #c0c0c0",
                  }}
                >
                  {`₹ ${props.salePrice}`}
                </span>
              </>
            ) : (
              <>
                <span style={{ color: "#696969" }}>MRP* </span>
                <span
                  style={{
                    color: "#696969",
                    textDecoration: "line-through #c0c0c0",
                  }}
                >
                  {`₹ ${props.strikeOfPrice}`}
                </span>
              </>
            )}
          </Price>
        </Link>
        {props.strikeOfPrice === undefined ? (
          <p></p>
        ) : (
          <p className="discount">{`${discountPrice}% OFF`}</p>
        )}
        {!authCount ? (
          <BUTTON onClick={addToCart}>
            <button className="btn-7">
              <span>ADD TO CART</span>
            </button>
          </BUTTON>
        ) : (
          <div className="counter">
            <span className="minus" onClick={() => handleChange(-1)}>
              -
            </span>
            <span className="count">{count}</span>
            <span className="plus" onClick={() => handleChange(+1)}>
              +
            </span>
          </div>
        )}
      </Card>
    </>
  );
};

export default ProductCard;
