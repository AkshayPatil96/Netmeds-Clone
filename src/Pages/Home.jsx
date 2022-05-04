import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import MultiItem from "../Components/Carousel/MultiItem";
import HomeCategory from "../Components/HomeCategory";
import data from "../Assests/Data/Net_Med_Data.json";
import ProductView from "../Components/ProductView";

const Home = () => {
    const [homeCategory, setHomeCategory] = useState([]);

    let wellnessCate = data.homeCategory;

    // let state = {
    //     myData: wellnessCate,
    // };

    const categoryData = () => {
        setHomeCategory({...wellnessCate});
    };

    useEffect(() => {
        categoryData();
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
                incomingData={homeCategory}
            />

            {/* Multi Product Slider for Top Brands */}

            <MultiItem
                gradBgColor="#ef4281"
                heading="Expolre Beauty"
                view="View All"
                headingColor="#fff"
            />

            {/* Multi Product Slider for Top Brands */}

            <MultiItem
                gradBgColor="#8b9096"
                heading="Top Brands"
                view="View All"
                headingColor="#fff"
            />

            <ProductView />
        </>
    );
};

export default Home;
