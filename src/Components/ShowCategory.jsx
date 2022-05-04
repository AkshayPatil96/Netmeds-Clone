import React from "react";
import styled from "styled-components";
import { Card } from "./Carousel/ShowMultiItems";
import styles from "../Components/Carousel/carousel.module.css";

const MainDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 2%;
    /* padding: 2%; */

    .category {
        /* border: 1px solid red; */
        padding: 2%;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        cursor: pointer;
        background: white;
    }

    .category > p {
        /* border: 1px solid red; */
        font-size: 20px;
        font-weight: 600;
        /* width: 100%; */
    }
`;

const ShowCategory = () => {
    return (
        <>
            <MainDiv>
                <div className="category">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg"
                        alt=""
                    />
                    <p className="title">Wellness</p>
                </div>
                <div className="category">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg"
                        alt=""
                    />
                    <p className="title">Wellness</p>
                </div>
                <div className="category">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg"
                        alt=""
                    />
                    <p className="title">Wellness</p>
                </div>
                <div className="category">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg"
                        alt=""
                    />
                    <p className="title">Wellness</p>
                </div>
                <div className="category">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg"
                        alt=""
                    />
                    <p className="title">Wellness</p>
                </div>
            </MainDiv>
        </>
    );
};

export default ShowCategory;
