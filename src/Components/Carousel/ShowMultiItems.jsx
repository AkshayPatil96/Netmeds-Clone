import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border-radius: 10px;
    margin: 5% 5%;
    padding: 0.5rem;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    /* position: relative; */

    .title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
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

const ShowMultiItems = (props) => {
    // console.log("props: ", props);

    return (
        <>
            <Card>
                <div>
                    <img
                        className="multi__image"
                        src={props.imageUrl}
                        alt=""
                        style={{
                            width: "100%",
                            height: "170px",
                            objectFit: "contain",
                            marginBottom: "10px",
                        }}
                    />
                    <p className="title">{props.title}</p>
                </div>
            </Card>
        </>
    );
};

export default ShowMultiItems;
