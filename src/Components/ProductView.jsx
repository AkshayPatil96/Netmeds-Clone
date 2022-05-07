import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategory, getProducts } from "../Redux/Category/action";
import Pagination from "./Pagination";
import { CategoryDiv } from "./Product.styled";
import ProductCard from "./ProductCard";
import SortBar from "./SortBar";

const ProductView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);

    const [pageNumberLimit, setPageNumberLimit] = useState(itemsPerPage);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(itemsPerPage);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const { category, product } = useParams();
    const dispatch = useDispatch();

    const { productData } = useSelector((state) => state.products);

    const lastPage = currentPage * itemsPerPage;
    const firstPage = lastPage - itemsPerPage;
    const currentPageData = productData.slice(firstPage, lastPage);
    // console.log('lastPage: ', lastPage);
    // console.log('firstPage: ', firstPage);
    // console.log('currentPageData: ', currentPageData);

    const handlePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);

            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);

            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    useEffect(() => {
        dispatch(getProducts(category, product));
    }, [category, product]);

    return (
        <>
            <SortBar pageCount={lastPage} total={productData.length} />

            <CategoryDiv>
                <p className="heading">All Products</p>
                <div className="products">
                    {currentPageData &&
                        currentPageData.map((product, index) => {
                            return <ProductCard key={index} {...product} />;
                        })}
                </div>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={productData.length}
                    maxPageNumberLimit={maxPageNumberLimit}
                    minPageNumberLimit={minPageNumberLimit}
                    currentPage={currentPage}
                    handlePage={handlePage}
                    handleNextBtn={handleNextBtn}
                    handlePrevBtn={handlePrevBtn}
                />
            </CategoryDiv>
        </>
    );
};

export default ProductView;
