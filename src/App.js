import React from "react";
import Home from "./Pages/Home";
import { Navbar, SubNav } from "./Components/Navbar";
import Product from "./Pages/Product";

const App = () => {
    return (
        <div>
            <Navbar />
            <SubNav />
            {/* <Home /> */}
            <Product />
        </div>
    );
};

export default App;
