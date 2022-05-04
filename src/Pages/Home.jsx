import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import MultiItem from "../Components/Carousel/MultiItem";
import HomeCategory from "../Components/HomeCategory";

const Home = () => {
    return (
        <>
            <div>Home</div>
            <Carousel />
            <HomeCategory />
            <MultiItem />
        </>
    );
};

export default Home;
