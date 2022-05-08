import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeCategory from "../Components/HomeCategory";
import { Navbar, SubNav } from "../Components/Navbar";
import ProductView from "../Components/ProductView";
import CategoryPage from "../Pages/CategoryPage";
import Home from "../Pages/Home";
import Login from "../Pages/Account/Login";
import ReqAuth from "./ReqAuth";
import Account from "../Pages/Account/Account";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";

const MainRouters = () => {
  return (
    <>
      <Navbar />
      <SubNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="products/:category" element={<HomeCategory />} />
        <Route path="/:category/:product" element={<Product />} />
        <Route path="/:category/:product/:brand" element={<Product />} />
        {/* <Route path="/product/:id" element={<Single />} /> */}
        {/* Gautam's Code below */}
        {/* <Route
          path="/cart"
          element={
            <ReqAuth>
              <Cart />
            </ReqAuth>
          }
        /> */}
        <Route
          path="/customer/account"
          element={
            <ReqAuth>
              <Account />
            </ReqAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainRouters;
