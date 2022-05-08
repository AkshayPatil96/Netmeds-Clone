import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  appendProducts,
  getCategory,
  getFilteredManufacturers,
  getFilteredProducts,
  getProducts,
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
    productData.sort((a, b) => b.salePrice - a.salePrice);
    // console.log('productData: ', productData);

    // console.log("Hello");
  };

  const handleL2H = () => {
    // productData
    // console.log("productData: ", productData);
  };

  useEffect(() => {
    dispatch(getProducts(category, product));
    dispatch(getFilteredManufacturers(category, product, brand));
    dispatch(getFilteredProducts(category, product, brand));
  }, [category, product, brand]);

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
