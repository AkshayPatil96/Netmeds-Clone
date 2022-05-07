import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeCategory from "../Components/HomeCategory";
import { Navbar, SubNav } from "../Components/Navbar";
import ProductView from "../Components/ProductView";
import CategoryPage from "../Pages/CategoryPage";
import Home from "../Pages/Home";
import Labtest from "../Pages/Labtest";
import Product from "../Pages/Product";

const MainRouters = () => {
    return (
        <>
            <Navbar />
            <SubNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:category" element={<CategoryPage />} />
                {/* <Route path="/:category" element={<Labtest />} /> */}
                <Route path="/:category/:product" element={<Product />} />
                {/* <Route path="products/:category" element={<HomeCategory />} /> */}
                {/* <Route path="/:id" element={<ProductView />} /> */}
            </Routes>
        </>
    );
};

export default MainRouters;
