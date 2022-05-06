import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Card, Cate } from "./Product.styled";
import { Link, useParams } from "react-router-dom";

const HomeCategory = () => {
    const { id } = useParams();
    return (
        <>
            <Cate>
                <Card >
                    <Link to={"/wellness"}>
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
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className="arrow"
                            />
                        </div>
                    </Link>
                </Card>

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
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="arrow"
                        />
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
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="arrow"
                        />
                    </div>
                </Card>
            </Cate>
        </>
    );
};

export default HomeCategory;
