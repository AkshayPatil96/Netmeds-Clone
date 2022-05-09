import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  appendProducts,
  discountData,
  getCategory,
  getFilteredManufacturers,
  getFilteredProducts,
  getProducts,
  sortingH2L,
  sortingL2H,
} from "../Redux/Category/action";
import Carousel from "./Carousel/Carousel";
import Pagination from "./Pagination";
import { CategoryDiv } from "./Product.styled";
import ProductCard from "./ProductCard";
import SortBar from "./SortBar";

const ProductView = () => {
  const { category, product, brand } = useParams();
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.products);
  // console.log("productData: ", productData);
  // console.log("appendData: ", appendData);
  // console.log("filteredBrandData: ", filteredBrandData);
  // console.log("filteredSellerData: ", filteredSellerData);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const [pageNumberLimit, setPageNumberLimit] = useState(itemsPerPage);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(itemsPerPage);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const displayProducts = productData;
  const lastPage = currentPage * itemsPerPage;
  const firstPage = lastPage - itemsPerPage;
  const currentPageData = displayProducts.slice(firstPage, lastPage);

  useEffect(() => {
    dispatch(getProducts(category, product));
    //     dispatch(getFilteredManufacturers(category, product, brand));
    //     dispatch(getFilteredProducts(category, product, brand));
    //
  }, [dispatch]);

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

  const handleH2L = () => {
    // productData.sort((a, b) => b.salePrice - a.salePrice);
    dispatch(sortingH2L(category, product));

    // console.log("Hello");
    // console.log("productData: ", productData);
  };

  const handleL2H = () => {
    // productData
    dispatch(sortingL2H(category, product));
    // console.log("productData: ", productData);
  };

  const handlePop = () => {
    dispatch(getProducts(category, product));
  };

  const handleDiscount = () => {
    console.log("dasds");
    let me = dispatch(discountData(category, product));
    console.log("me: ", me);
  };

  return (
    <>
      {/* <ProductSideBar /> */}
      <div
        style={{
          margin: "3% 2%",
        }}
      >
        <Carousel />
        <SortBar
          pageCount={lastPage}
          total={productData.length}
          handleH2L={handleH2L}
          handleL2H={handleL2H}
          handlePop={handlePop}
          handleDiscount={handleDiscount}
        />

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
      </div>
    </>
  );
};

export default ProductView;
