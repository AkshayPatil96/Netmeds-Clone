import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Details from "../Components/SingleProduct/Details";
import LeftBar from "../Components/SingleProduct/LeftBar";
import Rightbar from "../Components/SingleProduct/Rightbar";
import { getSingleProduct } from "../Redux/Category/action";

const MainProductBar = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { singleData } = useSelector((state) => state.products);
    console.log("singleData: ", singleData);

    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [id]);

    return (
        <div
            style={{
                margin: "5% 0",
            }}
        >
            <div style={{ display: "flex" }}>
                <div style={{ marginLeft: "200px" }}>
                    <LeftBar />
                </div>
                <div style={{ marginLeft: "100px" }}>
                    <Rightbar />
                </div>
            </div>
            <Details />
        </div>
    );
};

export default MainProductBar;
