import {
  ADD_NEW_USER,
  ADD_TO_CART,
  GET_USER,
  LOGOUT_USER,
  DELETE_PRODUCT,
} from "./actionType";
import axios from "axios";

//Check Func
// const checkUser = () =>{

// }

//Adding new user
const addNewUserType = (userData, token) => ({
  type: ADD_NEW_USER,
  payload: {
    userData,
    token,
  },
});

export const addNewUser = (userData, token) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/AuthDetails", userData);
    let data = await res.data;

    dispatch(addNewUserType(data, token));
    console.log(token);
  } catch (err) {
    console.log(err);
  }
};

//Adding token for exisiting user
export const loginExisitingUser = (userData, token) => async (dispatch) => {
  dispatch(addNewUserType(userData, token));
};

//getDataFirst
const getUser = (token, userData) => ({
  type: GET_USER,
  payload: {
    userData,
    token,
  },
});

export const getData = (token, mobile) => async (dispatch) => {
  try {
    let res = await axios.get(
      `http://localhost:8080/AuthDetails?mobileNumber=${mobile}`
    );
    let data = await res.data;

    dispatch(getUser(token, data[0]));
  } catch (err) {
    console.log(err);
  }
};

//Logout user
const logutType = () => ({
  type: LOGOUT_USER,
});

export const logoutUser = () => async (dispatch) => {
  dispatch(logutType());
};

// add to cart

const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

//Add to cart
let userData;
export const toCart = (id, mobile) => async (dispatch) => {
  try {
    let res = await axios.get(`http://localhost:8080/data/${id}`);
    let data = await res.data;

    let user = await axios.get(`http://localhost:8080/AuthDetails/${mobile}`);
    userData = await user.data;
    console.log("userData", userData);
    data.qunt = 1;
    let patch = await fetch(`http://localhost:8080/AuthDetails/${mobile}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        cart: [...userData.cart, data],
      }),
    });

    dispatch(addToCart(data));
  } catch (error) {
    console.log(error);
  }
};

//deleting the product
const deleteType = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export const deleteProduct = (data, id) => async (dispatch) => {
  dispatch(deleteType(data));

  try {
    let patch = await fetch(`http://localhost:8080/AuthDetails/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        cart: [...data],
      }),
    });
    let removedData = await patch.json();
    console.log(removedData);
  } catch (err) {
    console.log(err);
  }
};

const checkCart = async (id) => {};
