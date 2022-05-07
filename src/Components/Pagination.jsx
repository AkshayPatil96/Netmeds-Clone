import React from "react";
import styled from "styled-components";

const Pages = styled.div`
    margin: 5% 0;

    .pageNumbers {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pageNumbers li {
        text-align: center;
        width: 30px;
        padding: 2px;
        margin: 0 1%;
        height: 30px;
        border: 1px solid white;
        cursor: pointer;
        text-align: center;
        color: #181e3c;
    }

    .pageNumbers .active {
        color: #2aa8aa;
        font-weight: bold;
    }

    .pageNumbers button {
        width: 50px;
        height: 30px;
        outline: none;
        border: 1px solid #2aa8aa;
        background: #fff;
        color: #2aa8aa;
    }
    .pageNumbers button:hover {
        outline: none;
        border: 1px solid #2aa8aa;
        background: #2aa8aa;
        color: #fff;
    }
`;

const Pagination = ({
    itemsPerPage,
    totalItems,
    handlePage,
    maxPageNumberLimit,
    minPageNumberLimit,
    handleNextBtn,
    handlePrevBtn,
    currentPage,
}) => {
    const pageNumbers = [];
    const NumOfPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= NumOfPages; i++) {
        pageNumbers.push(i);
    }

    let pageIncrementBtn = null;
    if (pageNumbers.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextBtn}> ... </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevBtn}> ... </li>;
    }

    const paging = pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    className={currentPage === number ? "active" : null}
                    key={number}
                    onClick={() => handlePage(number)}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    return (
        <Pages>
            <ul className="pageNumbers">
                <button
                    onClick={handlePrevBtn}
                    disabled={currentPage == pageNumbers[0] ? true : false}
                >
                    Prev
                </button>
                {pageDecrementBtn}
                {paging}
                {pageIncrementBtn}
                <button
                    onClick={handleNextBtn}
                    disabled={
                        currentPage == pageNumbers[pageNumbers.length - 1]
                            ? true
                            : false
                    }
                >
                    Next
                </button>
            </ul>
        </Pages>
    );
};

export default Pagination;
