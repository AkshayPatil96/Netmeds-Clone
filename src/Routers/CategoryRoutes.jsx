import React from "react";
import { Route, Router } from "react-router-dom";
import ProductSideBar from "../Components/ProductSideBar";
import Product from "../Pages/Product";

const CategoryRoutes = () => {
    return (
        <Router>
            <ProductSideBar />
            {/* <switch> */}
                <Route path="/overview" exact component={Product} />
                <Route path="/reports" exact component={Product} />
                <Route path="/reports/reports1" exact component={Product} />
                <Route path="/reports/reports2" exact component={Product} />
                <Route path="/reports/reports3" exact component={Product} />
                <Route path="/team" exact component={Product} />
            {/* </switch> */}
        </Router>
    );
};

export default CategoryRoutes;
