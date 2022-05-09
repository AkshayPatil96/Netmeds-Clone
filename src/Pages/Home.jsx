import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import MultiItem from "../Components/Carousel/MultiItem";
import HomeCategory from "../Components/HomeCategory";
import ProductView from "../Components/ProductView";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getHomeData } from "../Redux/Category/action";

const Home = () => {
    const { category } = useParams();
    const { isLoading, isError, homepage } = useSelector(
        (state) => state.products
    );
    console.log("homepage: ", homepage.categoryInFocus);

    // console.log("products: ", data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHomeData());
    }, []);

    return (
        <>
            {/* Slider */}

            <Carousel />

            {/* Categories */}

            <HomeCategory />

            {/* Sub-Category */}

            <MultiItem
                heading="Categories in Focus"
                data={homepage.categoryInFocus}
                autoplay={false}
            />

            {/* Multi Product Slider for Top Brands */}

            <MultiItem
                gradBgColor="#ef4281"
                heading="Expolre Beauty"
                view="View All"
                headingColor="#fff"
                data={homepage.exploreBeauty}
                autoplay={false}
            />

            {/* Multi Product Slider for Top Brands */}

            <MultiItem
                gradBgColor="#8b9096"
                heading="Top Brands"
                view="View All"
                headingColor="#fff"
                data={homepage.topInBeauty}
            />

            {/* Footer */}

            <Footer />
        </>
    );
};

export default Home;
