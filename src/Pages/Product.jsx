import React from "react";
import styled from "styled-components";
import ProductSideBar from "../Components/ProductSideBar";
import ProductView from "../Components/ProductView";
import Carousel from "../Components/Carousel/Carousel";
import SortBar from "../Components/SortBar";
import MultiItem from "../Components/Carousel/MultiItem";

const MainProdDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 75%;
    justify-content: center;
    gap: 1.5rem;
    margin: 5% 0;
`;

const Product = () => {
    return (
        <>
            <MainProdDiv>
                <div>
                    <ProductSideBar />
                </div>
                <div>
                    <div
                        style={{
                            margin: "0 1% 5% 1%",
                        }}
                    >
                        <Carousel />
                    </div>
                    <MultiItem heading="Category" />
                    <SortBar />
                    <ProductView />
                </div>
            </MainProdDiv>
        </>
    );
};

export default Product;
