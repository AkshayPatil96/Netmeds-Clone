import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data, NextBtn, PreviousBtn } from "./Data";
import styled from "styled-components";
import { SliderDiv } from "../Product.styled";

// const SliderDiv = styled.div`
//     margin: 4% 2%;
// `;

const Carousel = () => {
    return (
        <>
            <SliderDiv className="carousel">
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
            </SliderDiv>
        </>
    );
};

export default Carousel;
