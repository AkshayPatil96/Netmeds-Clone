import React from "react";
import { useSelector } from "react-redux";
import Login from "../Pages/Account/Login";
import { Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  //   const { token } = useSelector((state) => state.isAuth);

  console.log(children);
  let token = localStorage.getItem("netmeds-token") || "";
  if (token) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default ReqAuth;
