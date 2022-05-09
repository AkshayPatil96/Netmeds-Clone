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
import MainProductBar from "../Pages/MainProductBar";
import Order from "../Pages/Order";
import Payment from "../Pages/Payment";
import Delhivery from "../Pages/Delhivery"
const MainRouters = () => {
  return (
    <>
      <Navbar />
      <SubNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category" element={<HomeCategory />} />
        <Route path="/:category/:product" element={<Product />} />
        <Route path="/:category/:product/:brand" element={<Product />} />
        <Route path="/product/:id" element={<MainProductBar />} />
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
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delhivery" element={<Delhivery/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainRouters;
