import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Styled from "styled-components";
import { getProducts } from "../Redux/Category/action";

const SortDiv = Styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin: 0 3%;
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

const SortBar = (props) => {
    const { category, product } = useParams();
    const dispatch = useDispatch();

    const { productData } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts(category, product));
    }, [category, product]);

    return (
        <>
            <SortDiv>
                <SortNumber>
                    <p className="sortnum">
                        Showing <strong> {props.pageCount} </strong> of
                        <strong> {props.total} </strong> Items
                    </p>
                </SortNumber>
                <SortFlex>
                    <div>
                        <label className="label">Sort by:</label>
                    </div>
                    <button className="btn">Popularity</button>
                    <button className="btn">High to Low</button>
                    <button className="btn">Low to High</button>
                    <button className="btn">Discount</button>
                </SortFlex>
            </SortDiv>
        </>
    );
};

export default SortBar;
