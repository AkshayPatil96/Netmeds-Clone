import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import MultiItem from "../Components/Carousel/MultiItem";
import HomeCategory from "../Components/HomeCategory";
import data from "../Assests/Data/Net_Med_Data.json";
import ShowCategory from "../Components/ShowCategory";
import Footer from "../Components/Footer";

const Home = () => {

    return (
        <>
            <Carousel />
            <HomeCategory />
            <ShowCategory />
            <MultiItem />
            <MultiItem />
            <Footer/>
        </>
    );
};

export default Home;
