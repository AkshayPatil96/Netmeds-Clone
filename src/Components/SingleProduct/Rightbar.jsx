import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../Redux/Category/action";
import OfferTab from "./OfferTab";
import styles from "./Rightbar.module.css";
import { toCart } from "../../Redux/Auth/action";

const Rightbar = () => {
  const { user } = useSelector((state) => state.isAuth);

  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleData } = useSelector((state) => state.products);
  console.log("singleData: ", singleData);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  const discountPrice = Math.ceil(
    ((singleData.strikeOfPrice - singleData.salePrice) /
      singleData.strikeOfPrice) *
      100
  );

  return (
    <>
      <div className={styles.ProductMainDiv}>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#151b39",
            lineHeight: "24px",
          }}
        >
          {singleData.title}
        </p>
        <div className={styles.BtnDiv}>
          <span className={styles.btn1}>{singleData.category}</span>
          <span className={styles.btn2}>{singleData.type}</span>
        </div>
        <div className={styles.LineBox}></div>
        <div className={styles.Details}>
          <div className={styles.priceTag}>
            <h2
              style={{
                fontSize: "16px",
                color: "#6f7284!important",
              }}
            >
              Best Price :
            </h2>
            <p
              style={{
                fotSize: "20px",
                color: "#ef4281",
                fontWeight: "bold",
              }}
            >
              ₹ {singleData.salePrice}
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "-20px" }}>
            <p style={{ fontSize: "12px", alignItems: "center" }}>
              MRP ₹ {singleData.strikeOfPrice}
            </p>
            <p
              style={{
                fontSize: "11px",
                marginLeft: "10px",
                alignItems: "center",
              }}
            >
              GET {discountPrice}% OFF{" "}
            </p>
          </div>
          <p
            style={{
              fontSize: "11px",
              textAlign: "left",
              marginTop: "-10px",
            }}
          >
            (Inclusive of all taxes)
          </p>
          <p
            style={{
              fontSize: "12px",
              textAlign: "left",
              marginTop: "-10px",
            }}
          >
            *10 Capsule(s) in a Strip
          </p>
          <p
            style={{
              fontSize: "12px",
              textAlign: "left",
              marginTop: "-10px",
            }}
          >
            * Mkt: {singleData.seller}
          </p>
          <p
            style={{
              fontSize: "12px",
              textAlign: "left",
              marginTop: "-10px",
            }}
          >
            * Country of Origin: India
          </p>
          <p
            style={{
              fontSize: "12px",
              textAlign: "left",
              marginTop: "-10px",
            }}
          >
            * Delivery charges if applicable will be applied at checkout
          </p>
          <button
            className={styles.AddBtn}
            onClick={() => {
              dispatch(toCart(singleData.id, user.id));
            }}
          >
            Add to Cart
          </button>
        </div>
        <div>
          <p
            style={{
              fontSize: "14px",
              textAlign: "left",
              letterSpacing: ".25px",
            }}
          >
            Check Availability & Expiry
          </p>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#02b7c2",
                textAlign: "left",
                marginTop: "-10px",
              }}
            >
              PINCODE:
            </p>
            <p
              style={{
                fontSize: "19px",
                fontWeight: "400",
                color: "#02b7c2",
                textAlign: "left",
                marginTop: "-10px",
              }}
            >
              361001
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: "16px",
            fontWeight: "500",
            letterSpacing: "0.25px",
          }}
        >
          Offers Applicable
        </p>
        <OfferTab data={singleData} />
      </div>
    </>
  );
};

export default Rightbar;
