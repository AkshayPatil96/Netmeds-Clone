import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../Assests/Data/Net_Med_Data.json";
import ProductCard from "./ProductCard";

const MainDiv = styled.div`
    /* margin: 2%; */
    padding: 1%;
    background: #fff;
    border-radius: 10px;

    .heading {
        color: #555;
        margin: 1% 2%;
    }

    .products {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        align-items: center;
    }

    @media all and (min-width: 650px) and (max-width: 950px) {
        .products {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-content: center;
            align-items: center;
        }
    }
    @media all and (min-width: 450px) and (max-width: 649px) {
        .products {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
            align-items: center;
        }
    }
    @media all and (min-width: 199px) and (max-width: 449px) {
        .products {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-content: center;
            align-items: center;
        }
    }
`;

const ProductView = () => {
    // const [homeCategory, setHomeCategory] = useState([]);

    let wellnessCate = data.products[0].category[0].products;
    // console.log('wellnessCate: ', data.products[0].category[0].products);

    // const categoryData = () => {
    //   setHomeCategory(wellnessCate);
    // };

    // useEffect(() => {
    //   // categoryData();
    //   // console.log('homeCategory: ', homeCategory);
    // }, []);

    return (
        <>
            <MainDiv>
                <p className="heading">All Products</p>
                <div className="products">
                    {wellnessCate.map((product, index) => {
                        return <ProductCard key={index} {...product} />;
                    })}
                </div>
            </MainDiv>
        </>
    );
};

export default ProductView;
