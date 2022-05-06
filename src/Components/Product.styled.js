import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryDiv = styled.div`
    margin: 2% 3%;
    padding: 1%;
    background: #fff;
    border-radius: 10px;

    .heading {
        color: #555;
        margin: 1% 2%;
    }

    .products {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        align-items: center;
    }

    @media all and (min-width: 650px) and (max-width: 950px) {
        .products {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-content: center;
            align-items: center;
        }
    }
    @media all and (min-width: 450px) and (max-width: 649px) {
        .products {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
            align-items: center;
        }
    }
    @media all and (min-width: 199px) and (max-width: 449px) {
        .products {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-content: center;
            align-items: center;
        }
    }
`;

export const SliderDiv = styled.div`
    margin: 4% 2%;
`;

// export const Cate = styled(Link)`
export const Cate = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 5%;
`;

export const Card = styled.div`
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