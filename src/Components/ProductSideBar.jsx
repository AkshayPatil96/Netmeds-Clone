import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import SubMenu, { DropdownLink, SidebarLabel, SidebarLink } from "./SubMenu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getFilteredProducts,
  getProducts,
  showData,
} from "../Redux/Category/action";
// import { useNavigation } from "@react-navigation/native";

const SidebarNav = styled.nav`
  margin: 0% 0% 15% 0%;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 350ms;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarScroll = styled.div`
  height: 150px;
  overflow: scroll;
  margin: 2%;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888888;
    border-radius: 25px;
  }
`;

const SidebarTitle = styled.div`
  /* border: 1px solid; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b4b4b484;

  .cate {
    padding: 3%;
    margin: 4%;
    font-size: 22px;
    color: #181e3c;
  }

  .reset {
    color: #181e3c;
    margin: 4%;
  }

  .btn {
    margin: 4%;
    border: none;
    background: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ProductSideBar = () => {
  const { category, product, brand } = useParams();
  const dispatch = useDispatch();

  const [myData, setMyData] = useState("");

  const { data, productData, displayData } = useSelector(
    (state) => state.products
  );
  // console.log("displayData: ", displayData);
  // console.log("productData: ", productData);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategory(category));
    dispatch(getCategory(category));
    dispatch(getProducts(category, product));
    // dispatch(getFilteredProducts(category, product, brand));
  }, [category, product]);

  // useEffect(() => {
  //     dispatch(showData(category, product));
  // }, [category, product]);
  // console.log("myData: ", myData);

  const handleReset = () => {
    dispatch(getProducts(category, product));
    // setMyData(displayData);
  };

  let brands = [];
  let manufacturers = [];
  for (let i = 0; i < productData.length; i++) {
    brands.push(productData[i].brand);
    manufacturers.push(productData[i].seller);
  }

  let filteredBrands = brands.filter((c, index) => {
    return brands.indexOf(c) === index;
  });

  let filteredManufacturers = manufacturers.filter((c, index) => {
    return manufacturers.indexOf(c) === index;
  });

  // useEffect(() => {
  //     // dispatch(showData(category, product));
  // }, [category, product]);

  // console.log("displayData: ", displayData);
  return (
    <>
      <SidebarNav>
        <h3 className="cate">Categories</h3>
        <SidebarWrap>
          {data.category &&
            data.category.map((item, index) => {
              return <SubMenu items={item} key={index} />;
            })}
        </SidebarWrap>
      </SidebarNav>
      <SidebarNav>
        <SidebarTitle>
          <h3 className="cate">Filter</h3>
          {/* <Link to={`/${category}/${product}`} className="reset"> */}
          <button onClick={handleReset} className="btn">
            Reset
          </button>
          {/* </Link> */}
        </SidebarTitle>
        <SidebarWrap>
          <SidebarLink>
            <div>
              <SidebarLabel primary>Brands</SidebarLabel>
              <div></div>
            </div>
          </SidebarLink>
          <SidebarScroll>
            {filteredBrands.map((item, index) => {
              return (
                <DropdownLink
                  to={`/${category}/${product}/${item}`}
                  key={index}
                >
                  <SidebarLabel>{item}</SidebarLabel>
                </DropdownLink>
              );
            })}
          </SidebarScroll>
        </SidebarWrap>
        <SidebarWrap>
          <SidebarLink>
            <div>
              <SidebarLabel primary>Manufacturers</SidebarLabel>
            </div>
          </SidebarLink>
          <SidebarScroll>
            {filteredManufacturers.map((item, index) => {
              return (
                <DropdownLink
                  to={`/${category}/${product}/${item}`}
                  key={index}
                >
                  <SidebarLabel>{item}</SidebarLabel>
                </DropdownLink>
              );
            })}
          </SidebarScroll>
        </SidebarWrap>
        {/* <SidebarWrap>
          <SidebarLink>
            <SidebarLabel primary>Price Range</SidebarLabel>
          </SidebarLink>
          <input type="range" name="" id="" />
        </SidebarWrap> */}
      </SidebarNav>
    </>
  );
};

export default ProductSideBar;
