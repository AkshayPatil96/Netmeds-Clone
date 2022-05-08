import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/Category/action";

const Single = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleData } = useSelector((state) => state.products);
  console.log('singleData: ', singleData);

  useEffect(() => {
      dispatch(getSingleProduct(id));
  }, [id]);
  return <div>
      <h1>{singleData.title}</h1>
    <img src={singleData.imageUrl} alt="" />
  </div>;
};

export default Single;
