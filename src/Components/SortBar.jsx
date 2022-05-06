import React from "react";
import Styled from "styled-components";

const SortDiv = Styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 3% 1%;
`;

const SortNumber = Styled.div`
  color: #151b39;
  line-height:25px;
  `;

const SortFlex = Styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding:1%;
  /* width:40%; */
  
  .btn {
    padding: 5px 20px;
    margin: 0 0 0 5px;
    font-size: 12px;
    text-align: center;
    width: 110px;
    height 25px;
    /* border: 1px solid #151b39; */
    border-radius: 5px;
    background:#fff;
    cursor: pointer;
    color: #24aeb1;
    border: 1px solid #24aeb1;
  }
  
  .btn:hover {
    background: #24aeb1;
    color: #fff;
    border: 1px solid #24aeb1;

  }
`;

const SortBar = () => {
    return (
        <>
            <SortDiv>
                <SortNumber>
                    <p className="sortnum">
                        Showing <strong> 20 </strong> of <strong> 40 </strong>{" "}
                        Items
                    </p>
                </SortNumber>
                <SortFlex>
                    <div>
                        <label class="label">Sort by:</label>
                    </div>
                    <button class="btn">Popularity</button>
                    <button class="btn">High to Low</button>
                    <button class="btn">Low to High</button>
                    <button class="btn">Discount</button>
                </SortFlex>
            </SortDiv>
        </>
    );
};

export default SortBar;
