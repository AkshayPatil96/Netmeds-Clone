import { ADD_NEW_USER, ADD_TO_CART, GET_USER, LOGOUT_USER } from "./actionType";
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

export const toCart = (payload, mobile) => async (dispatch) => {
  try {
    let res = await axios.patch(
      `http://localhost:8080/AuthDetails?mobileNumber=${mobile}`,
      {
        qty: payload,
      }
    );
    let data = await res.data;
    console.log("data: ", data);
  } catch (error) {}
};
