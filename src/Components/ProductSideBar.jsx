import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import data from "../Assests/Data/Net_Med_Data.json";
import SubMenu, { DropdownLink, SidebarLabel, SidebarLink } from "./SubMenu";

const SidebarNav = styled.nav`
    margin: 0% 0% 15% 0%;
    border-radius: 10px;
    background: #fff;
    /* width: 250px; */
    /* height: 100vh; */               
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* position: fixed; */
    /* top: 0; */
    /* left: 0; */
    transition: 350ms;
    /* z-index: 10; */

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
    /* background: #000; */
    /* border: 1px solid #000; */

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
    let categories = data.products;
    let filter = data.products[0].category[0].products;

    let arr = [];
    let arr1 = [];
    filter.map((item) => {
        let brand = arr.push(item.brand);
        let manufacturers = arr1.push(item.seller);
    });
    let filteredBrands = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
    let filterManufacturers = arr1.filter((c, index) => {
        return arr1.indexOf(c) === index;
    });

    return (
        <>
            <SidebarNav>
                <h3 className="cate">Categories</h3>
                <SidebarWrap>
                    {categories.map((item, index) => {
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
                        {filterManufacturers.map((item, index) => {
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
