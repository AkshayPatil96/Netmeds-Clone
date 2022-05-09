import styled from "styled-components";
export const Cardmain = styled.div`
  background-color: whitesmoke;
  width: 100%;
  /* opacity:0.33; */
  margin-top: 10px;
  height: 1000px;
`;

export const Carddiv = styled.div`
  width: 73%;
  height: 500px;
  margin: auto;
  /* border:1px solid red; */
  display: flex;
`;
export const CardProduct = styled.div`
  width: 65%;
  height: 500px;

  /* border:1px solid black; */
  border-radius: 5px;
`;

export const CardTotal = styled.div`
  width: 32%;
  height: 500px;
  /* border:1px solid black; */
  border-radius: 5px;
  margin-left: 30px;
`;

export const ApplyPromo = styled.div`
  background-color: white;
  width: 100%;
  height: auto;
  padding-bottom: 10px;
  border-radius: 10px;
`;
export const P = styled.p`
  margin-top: 0px;

  padding-top: 10px;
  padding-left: 15px;
  color: gray;
  font-size: 14px;
`;

export const Total = styled.div`
  background-color: white;
  margin-top: 20px;
  width: 100%;
  height: 300px;
  border-radius: 10px;
`;

export const TotalSub = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
`;
export const TotalSaving = styled.div`
  margin-left: 5px;
  margin-right: 10px;
  padding: 10px;
  background-color: #f3f8ec;
  color: green;
  width: 280px;
`;

export const Button = styled.button`
  background-color: #24aeb1;
  color: white;
  padding: 15px;
  width: 150px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
`;
export const Product = styled.div`
  background-color: white;
  margin-top: 20px;
  width: 100%;
  height: auto;
  border-radius: 10px;
`;
export const Productt = styled.div`
  background-color: white;
  margin-top: 20px;
  width: 100%;
  height: 250px;
  border-radius: 10px;
`;

export const P1 = styled.p`
  padding-top: 20px;
  padding-left: 25px;
  color: gray;

  font-size: 14px;
`;
export const Add = styled.div`
  position: fixed;
  margin-top: -130px;
  background-color: white;
  width: 400px;
  right: 0;
  height: 90%;
  border: 1px solid;
  overflow: scroll;
  padding: 10px;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888888;
    border-radius: 25px;
  }
`;
