import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowMultiItems from "./ShowMultiItems";
import styles from "./carousel.module.css";
import data from "../../Assests/Data/Net_Med_Data.json";
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

const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 5,
    slidesToScroll: 2,
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

const MultiItem = (props) => {
    // console.log('incomingData: ', incomingData);
    const [homeCategory, setHomeCategory] = useState([]);
    

    // const fetchData = incomingData;
    // console.log("fetchData: ", fetchData);

    let wellnessCate = data.homeCategory;
    const categoryData = () => {
        setHomeCategory(wellnessCate);
    };

    useEffect(() => {
        categoryData();
    }, []);

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
                    {homeCategory.map((product, index) => {
                        return <ShowMultiItems key={index} {...product} />;
                    })}
                </Slider>
            </div>
        </>
    );
};

export default MultiItem;
