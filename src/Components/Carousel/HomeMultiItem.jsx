import React from "react";
import styles from "./carousel.module.css";
import styled from "styled-components";
import Slider from "react-slick/lib/slider";
import { Link } from "react-router-dom";
import { NextBtn, PreviousBtn } from "./Data";

const Card = styled.div`
    border-radius: 10px;
    /* margin: 5%; */
    /* padding: 1%; */

    background: #fff;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    cursor: pointer;
    gap: 1rem;
    border: 10px solid #f6f6f7;
    /* position: relative; */

    .cardLink {
        color: #142431;
        text-decoration: none;
    }

    .title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: #142431;
        text-overflow: ellipsis;
        font-weight: bold;
        height: 38px;
        font-size: 16px;
        padding: 0 0.5rem 0 0.7rem;
        text-align: center;
    }

    .discount {
        position: absolute;
        display: inline-block;
        padding: 0.15rem 0.5rem;
        font-size: 0.65rem;
        letter-spacing: 0.05rem;
        font-weight: bold;
        background: #84be52;
        color: #ffffff;
        top: 0;
        left: 5%;
    }
`;

const HomeMultiItem = (props) => {
    const carouselProperties = {
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        infinite: true,
        slidesToShow: 5,
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
                            return (
                                <Card key={index}>
                                    <Link to={`#`} className="cardLink">
                                        <div>
                                            <img
                                                className="multi__image"
                                                src={product.imageUrl}
                                                alt=""
                                                style={{
                                                    width: "100%",
                                                    height: "170px",
                                                    objectFit: "contain",
                                                    marginBottom: "10px",
                                                }}
                                            />
                                            <p className="title">
                                                {product.title}
                                            </p>
                                        </div>
                                    </Link>
                                </Card>
                            );
                            // <ShowMultiItems key={index} {...product} />;
                        })}
                </Slider>
            </div>
        </>
    );
};

export default HomeMultiItem;
