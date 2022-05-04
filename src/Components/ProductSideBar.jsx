import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import data from "../Assests/Data/Net_Med_Data.json";
import SubMenu from "./SubMenu";

const SidebarNav = styled.nav`
    /* margin: 5% 2%; */
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

const ProductSideBar = () => {
    // const [sidebar, setSidebar] = useState(false);
    let categories = data.products;
    // console.log(data.products);
    // const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            {/* <IconContext.Provider value={{ color: "#fff" }}> */}

            <SidebarNav>
                <h3 className="cate">Categories</h3>
                <SidebarWrap>
                    {categories.map((item, index) => {
                        return <SubMenu items={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
            {/* </IconContext.Provider> */}
        </>
    );
};

export default ProductSideBar;
