import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Styled from "styled-components";
import { getProducts } from "../Redux/Category/action";

const SortDiv = Styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin: 2%;
  padding: 0% 1%;
`;

const SortNumber = Styled.div`
  color: #151b39;
  line-height:25px;
  `;

const SortFlex = Styled.div`
  display: flex;
  align-items: center;
  padding:1%;
  
  .btn {
    padding: 5px 20px;
    margin: 0 0 0 5px;
    font-size: 12px;
    text-align: center;
    width: 110px;
    height 25px;
    border-radius: 5px;
    background:#fff;
    cursor: pointer;
    color: #24aeb1;
    border: 1px solid #24aeb1;
  }
  
  .btn:hover {
    background: #24aeb1;
    color: #fff;
    border: 1px solid #24aeb1;

  }
`;

const SortBar = ({
    handleDiscount,
    handlePop,
    handleL2H,
    pageCount,
    total,
    handleH2L,
}) => {
    const { category, product } = useParams();
    const dispatch = useDispatch();

    const { productData } = useSelector((state) => state.products);

    // const handleH2L = () => {
    //   productData.sort((a, b) => b.salePrice - a.salePrice);
    //   console.log("productData: ", productData);
    // };

    useEffect(() => {
        dispatch(getProducts(category, product));
    }, [category, product]);

    return (
        <>
            <SortDiv>
                <SortNumber>
                    <p className="sortnum">
                        Showing <strong> {pageCount} </strong> of
                        <strong> {total} </strong> Items
                    </p>
                </SortNumber>
                <SortFlex>
                    <div>
                        <label className="label">Sort by:</label>
                    </div>
                    <button onClick={handlePop} className="btn">
                        Popularity
                    </button>
                    <button onClick={handleH2L} className="btn">
                        High to Low
                    </button>
                    <button onClick={handleL2H} className="btn">
                        Low to High
                    </button>
                    <button onClick={handleDiscount} className="btn">
                        Discount
                    </button>
                </SortFlex>
            </SortDiv>
        </>
    );
};

export default SortBar;
