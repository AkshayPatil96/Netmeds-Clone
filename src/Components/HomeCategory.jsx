import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Cate = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* border: 1px solid; */
    gap: 2rem;
    margin: 5%;
`;
const Card = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    padding: 8px;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .poster {
        display: flex;
        text-align: left;
    }

    .icon {
        width: 50px;
    }

    .poster > div {
        padding: 5px;
    }

    .poster > div > p {
        margin: 0;
        padding: 2px 8px;
    }

    .poster > div > p:first-child {
        font-size: 18px;
        font-weight: bold;
        color: black;
    }

    .poster > div > p:last-child {
        font-size: 12px;
        color: #63da63;
    }

    .arrow {
        color: #9d9fa2;
        font-size: 10px;
    }
`;

const HomeCategory = () => {
    return (
        <Cate>
            <Card>
                {/* <Link></Link> */}
                <div className="poster">
                    <img
                        className="icon"
                        src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg"
                        alt=""
                    />
                    <div>
                        <p>Beauty</p>
                        <p>Save upto 40% off</p>
                    </div>
                </div>
                <div className="right-arrow">
                    <FontAwesomeIcon icon={faChevronRight} className="arrow" />
                </div>
            </Card>

            <Card>
                {/* <Link></Link> */}
                <div className="poster">
                    <img
                        className="icon"
                        src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg"
                        alt=""
                    />
                    <div>
                        <p>Wellness</p>
                        <p>Save upto 15% off</p>
                    </div>
                </div>
                <div className="right-arrow">
                    <FontAwesomeIcon icon={faChevronRight} className="arrow" />
                </div>
            </Card>

            <Card>
                {/* <Link></Link> */}
                <div className="poster">
                    <img
                        className="icon"
                        src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg"
                        alt=""
                    />
                    <div>
                        <p>Medicine</p>
                        <p>Save upto 25% off</p>
                    </div>
                </div>
                <div className="right-arrow">
                    <FontAwesomeIcon icon={faChevronRight} className="arrow" />
                </div>
            </Card>
        </Cate>
    );
};

export default HomeCategory;
