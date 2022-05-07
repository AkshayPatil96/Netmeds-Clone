import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeCategory from "../Components/HomeCategory";
import { Navbar, SubNav } from "../Components/Navbar";
import ProductView from "../Components/ProductView";
import CategoryPage from "../Pages/CategoryPage";
import Home from "../Pages/Home";
import Labtest from "../Pages/Labtest";
import Cart from "../Pages/Cart";
import Login from "../Pages/Account/Login";
import ReqAuth from "./ReqAuth";
import Account from "../Pages/Account/Account";
const MainRouters = () => {
  return (
    <>
      <Navbar />
      <SubNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category" element={<Labtest />} />
        {/* <Route path="products/:category" element={<HomeCategory />} /> */}
        {/* <Route path="/:id" element={<ProductView />} /> */}
        {/* Gautam's Code below */}
        <Route
          path="/cart"
          element={
            <ReqAuth>
              <Cart />
            </ReqAuth>
          }
        />
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
