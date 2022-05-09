import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const Wrapper =styled.div`
  padding:25px;
  text-align:center;
`
const Button = styled.button`
width:150px;
height: 40px;
border: none;
background-color: #24aeb1;
border-radius: 5px;
color: #fff;
font-size: 15px;
cursor: pointer;
`


const Delhivery = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Wrapper>
        <h1>Your Product successfully ordered</h1>
        <Button onClick={()=>navigate("/")}>Go to Home</Button>
      </Wrapper>
    </div>
  );
};

export default Delhivery;
