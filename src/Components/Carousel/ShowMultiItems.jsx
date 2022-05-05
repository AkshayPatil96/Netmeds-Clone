import React from "react";
import styled from "styled-components";

export const Card = styled.div`
    border-radius: 10px;
    margin: 5% 5%;
    padding: 0.5rem;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    position: relative;

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

const Price = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.5em;
    padding: 0 0.5rem 0 0.7rem;
    align-items: center;
    margin-bottom: 8px;
    font-size: ${(props) => (props.orig ? "14px" : "16px")};
    font-weight: ${(props) => (props.orig ? "normal" : "bold")};
`;

const BUTTON = styled.div`
    margin: 3% 5%;

    button {
        width: 100%;
        color: #fff;
        cursor: pointer;
        padding: 0;
        transition: all 0.3s ease;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        outline: none;
        background: linear-gradient(0deg, #24aeb1, #359b9c);
        border: none;
        line-height: 35px;
    }

    .btn-7 {
    }
    .btn-7 span {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .btn-7:before,
    .btn-7:after {
        position: absolute;
        content: "";
        right: 0;
        bottom: 0;
        background: #24aeb1;
        box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
            -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
            7px 7px 20px 0px rgba(0, 0, 0, 0.2),
            4px 4px 5px 0px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }
    .btn-7:before {
        height: 0%;
        width: 2px;
    }
    .btn-7:after {
        width: 0%;
        height: 2px;
    }
    .btn-7:hover {
        color: #24aeb1;
        font-weight: bold;
        background: transparent;
    }
    .btn-7:hover:before {
        height: 100%;
    }
    .btn-7:hover:after {
        width: 100%;
    }
    .btn-7 span:before,
    .btn-7 span:after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        background: #24aeb1;
        box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
            -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
            7px 7px 20px 0px rgba(0, 0, 0, 0.2),
            4px 4px 5px 0px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }
    .btn-7 span:before {
        width: 2px;
        height: 0%;
    }
    .btn-7 span:after {
        height: 2px;
        width: 0%;
    }
    .btn-7 span:hover:before {
        height: 100%;
    }
    .btn-7 span:hover:after {
        width: 100%;
    }
`;

const ShowMultiItems = (props) => {
    return (
        <>
            <Card>
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
            </Card>
        </>
    );
};

export default ShowMultiItems;
