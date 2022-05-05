import React from "react";
import Home from "./Pages/Home";
import { Navbar, SubNav } from "./Components/Navbar";
import Product from "./Pages/Product";
import Login from "./Pages/Account/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <SubNav /> */}
      {/* <Home /> */}
      {/* <Product /> */}
      <Login />
    </div>
  );
};

export default App;
