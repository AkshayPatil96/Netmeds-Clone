import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../Redux/Category/action";
import styles from "./Rightbar.module.css";

const LeftBar = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { singleData } = useSelector((state) => state.products);
    console.log("singleData: ", singleData);

    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [id]);

    return (
        <>
            <div className={styles.LeftBar}>
                <img
                    src={singleData.imageUrl}
                    height={"510px"}
                    width={"480px"}
                    alt={singleData.title}
                />
            </div>
        </>
    );
};

export default LeftBar;
