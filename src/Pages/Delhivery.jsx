import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

const Delhivery = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <h1>Your Product successfully order</h1>
        <button onClick={()=>navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
};

export default Delhivery;
