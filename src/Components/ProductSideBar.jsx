import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import SubMenu, { DropdownLink, SidebarLabel, SidebarLink } from "./SubMenu";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getCategory,
    getFilteredProducts,
    getProducts,
} from "../Redux/Category/action";

const SidebarNav = styled.nav`
    margin: 0% 0% 15% 0%;
    border-radius: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 350ms;

    .cate {
        margin: 4% 3%;
        padding: 3%;
        font-size: 22px;
        color: #181e3c;
        border-bottom: 1px solid #b4b4b484;
    }
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

const ProductSideBar = () => {
    const { category, product } = useParams();
    const dispatch = useDispatch();

    const { data } = useSelector((state) => state.products);
    // console.log('data: ', data);

    const { filteredBrandData } = useSelector((state) => state.products);
    // console.log("filteredBrandData: ", filteredBrandData);

    const { productData } = useSelector((state) => state.products);

    let brand = [];
    let manufacturers = [];
    for (let i = 0; i < productData.length; i++) {
        brand.push(productData[i].brand);
        manufacturers.push(productData[i].seller);
    }

    let filteredBrands = brand.filter((c, index) => {
        return brand.indexOf(c) === index;
    });

    let filteredManufacturers = manufacturers.filter((c, index) => {
        return manufacturers.indexOf(c) === index;
    });

    useEffect(() => {
        dispatch(getCategory(category));
        dispatch(getProducts(category, product));
        dispatch(getFilteredProducts(category, product, brand));
    }, [category, product, brand]);

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
                <h3 className="cate">Filter</h3>
                <SidebarWrap>
                    <SidebarLink>
                        <div>
                            <SidebarLabel primary>Brands</SidebarLabel>
                        </div>
                    </SidebarLink>
                    <SidebarScroll>
                        {filteredBrands.map((item, index) => {
                            return (
                                <DropdownLink to={`${item}`} key={index}>
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
                                <DropdownLink to={`${item}`} key={index}>
                                    <SidebarLabel>{item}</SidebarLabel>
                                </DropdownLink>
                            );
                        })}
                    </SidebarScroll>
                </SidebarWrap>
                <SidebarWrap>
                    <SidebarLink>
                        <SidebarLabel primary>Price Range</SidebarLabel>
                    </SidebarLink>
                    <input type="range" name="" id="" />
                </SidebarWrap>
            </SidebarNav>
        </>
    );
};

export default ProductSideBar;
