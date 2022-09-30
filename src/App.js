import React from "react";
import Home from "./Pages/Home";
import { Navbar, SubNav } from "./Components/Navbar";
import Product from "./Pages/Product";
import Login from "./Pages/Account/Login";
import Payment from "./Pages/Payment";
import Account from "./Pages/Account/Account";
import MainRouters from "./Routers/MainRouters";
import Cart from "./Pages/Cart";
const App = () => {
  return (
    <div>
      <MainRouters />
      {/* <Navbar /> */}
      {/* <SubNav />  */}
      {/* <Account />  */}
      {/* <SubNav />  */}
      {/* <Payment /> */}
      {/* <SubNav /> */}
      {/* <Home /> */}
      {/* <Product /> */}
      {/* <Login /> */}
      {/* <Cart/>  */}
    </div>
  );
};

export default App;
