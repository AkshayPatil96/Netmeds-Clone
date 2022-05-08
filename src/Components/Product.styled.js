import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryDiv = styled.div`
    /* margin: 1% 0%; */
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

// export const Cate = styled(Link)`
export const Cate = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 5%;
    `;

export const Card = styled.div`
    width: 30%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
    .linked {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 8px;
        color: #181e3c;
        text-decoration: none;
        align-items: center;
        border-radius: 5px;
        background: #fff;
        cursor: pointer;
    }
    
    .poster {
        display: flex;
        flex-wrap: wrap;
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

export const MainProdDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 75%;
  justify-content: center;
  gap: 1.5rem;
  margin: 5% 0;
`;
