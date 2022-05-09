import React from "react";
import LImage from "../Components/LabTest/LImage";
// import PopularTests from "../Components";
import RForm from "../Components/LabTest/RForm";

const LabMain = () => {
  return (
    <>
      <div style={{ display: "flex", margin: "5%"}}>
        <div>
          <LImage />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <RForm />
        </div>
      </div>
    </>
  );
};

export default LabMain;
