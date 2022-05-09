import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowMultiItems from "./ShowMultiItems";
import styles from "./carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Previous Button

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} ${styles.smallLeft}`}
            onClick={onClick}
            style={{ border: "none" }}
        >
            <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ color: "#555", fontSize: "20px" }}
            />
        </div>
    );
};

// Next Button for carousel

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.smallRight}`} onClick={onClick}>
            <FontAwesomeIcon
                icon={faChevronRight}
                style={{ color: "#555", fontSize: "20px" }}
            />
        </div>
    );
};

const AutoMultiItem = (props) => {
    const carouselProperties = {
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "170px",
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    // console.log("props.data: ", props.data);

    return (
        <>
            <div
                className={styles.carousel}
                style={{
                    background: `linear-gradient(180deg, ${props.gradBgColor} 50%, rgba(243, 247, 251, 1) 50%)`,
                }}
            >
                <div
                    className={styles.headingFlex}
                    style={{
                        color: `${props.headingColor}`,
                    }}
                >
                    <h1 className={styles.heading}>{props.heading}</h1>
                    <p>{props.view}</p>
                </div>
                <Slider {...carouselProperties} className={styles.slider}>
                    {props.data &&
                        props.data.map((product, index) => {
                            // return <ShowMultiItems key={index} {...product} />;
                            return (
                                <div key={index}>
                                    <img
                                        src={product.imageUrl}
                                        alt=""
                                        style={{
                                            padding: "5px",
                                        }}
                                    />
                                </div>
                            );
                        })}
                </Slider>
            </div>
        </>
    );
};

export default AutoMultiItem;
