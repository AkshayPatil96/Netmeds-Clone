import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data, NextBtn, PreviousBtn } from "./Data";

const Carousel = () => {
    return (
        <>
            <div style={{ margin: "30px" }} className="carousel">
                <Slider
                    autoplay
                    autoplaySpeed={5000}
                    dots
                    initialSlide={2}
                    infinite
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    dotsClass="slick-dots"
                >
                    {data.map((item, index) => (
                        <div key={index}>
                            <img src={item} alt="" style={{ width: "100%" }} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Carousel;
