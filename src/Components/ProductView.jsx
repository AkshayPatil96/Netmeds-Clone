import React, { useState, useEffect } from "react";
import { CategoryDiv } from "./Product.styled";
import ProductCard from "./ProductCard";

const ProductView = ({ data }) => {
    console.log('data: ', data);
    return (
        <>
            <CategoryDiv>
                <p className="heading">All Products</p>
                <div className="products">
                    {/* {{ data }.map((product, index) => {
                        return <ProductCard key={index} {...product} />;
                    })} */}
                </div>
            </CategoryDiv>
        </>
    );
};

export default ProductView;
