import React, { useEffect } from "react";
import styled from "styled-components";
import ProductSideBar from "../Components/ProductSideBar";
import ProductView from "../Components/ProductView";
import MultiItem from "../Components/Carousel/MultiItem";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilteredManufacturers, getFilteredProducts } from "../Redux/Category/action";

const MainProdDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 75%;
    justify-content: center;
    gap: 1.5rem;
    margin: 5% 0;
`;

const Product = () => {
    // const { category, product, brand } = useParams();
    // const dispatch = useDispatch();
    // const { filteredBrandData } = useSelector((state) => state.products);
    // const { filteredSellerData } = useSelector((state) => state.products);
    // console.log('filteredSellerData: ', filteredSellerData);
    // useEffect(() => {
    // //   dispatch(getCategory(category));
    // //   dispatch(getProducts(category, product));
    // dispatch(getFilteredManufacturers(category, product, brand));
    //   dispatch(getFilteredProducts(category, product, brand));
    // }, [category, product, brand]);
    return (
        <>
            <MainProdDiv>
                <div>
                    <ProductSideBar />
                </div>
                <div>
                    {/* <MultiItem heading="Category" /> */}
                    <ProductView />
                </div>
            </MainProdDiv>
        </>
    );
};

export default Product;
