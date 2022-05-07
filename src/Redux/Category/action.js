import axios from "axios";
import {
    FAILURE_METHOD,
    REQUEST_METHOD,
    SUCCESS_CATEGORY_METHOD,
    SUCCESS_FILTER_METHOD,
    SUCCESS_PRODUCT_METHOD,
    SUCCESS_SINGLE_PRODUCT_METHOD,
} from "./actionType";

const request = () => ({
    type: REQUEST_METHOD,
});

const successCategory = (payload) => ({
    type: SUCCESS_CATEGORY_METHOD,
    payload,
});

const successProduct = (payload) => ({
    type: SUCCESS_PRODUCT_METHOD,
    payload,
});

const successBrandFilter = (payload) => ({
    type: SUCCESS_FILTER_METHOD,
    payload,
});

const successSingleProduct = (payload) => ({
    type: SUCCESS_SINGLE_PRODUCT_METHOD,
    payload,
});

const failure = (payload) => ({
    type: FAILURE_METHOD,
    payload,
});

const getCategory = (category) => async (dispatch) => {
    dispatch(request());
    try {
        let response = await axios.get(
            `http://localhost:8080/categories/${category}`
        );
        let data = await response.data;
        dispatch(successCategory(data));
    } catch (error) {
        dispatch(failure());
    }
};

const getProducts = (category, product) => async (dispatch) => {
    dispatch(request());
    try {
        let response = await axios.get(
            `http://localhost:8080/data?category=${category}&type=${product}`
        );
        let data = await response.data;
        dispatch(successProduct(data));
    } catch (error) {
        dispatch(failure());
    }
};

const getFilteredProducts = (category, product, brand) => async (dispatch) => {
    dispatch(request());
    try {
        let response = await axios.get(
            `http://localhost:8080/data?category=${category}&type=${product}&brand=${brand}`
        );
        let data = await response.data;
        dispatch(successBrandFilter(data));
    } catch (error) {
        dispatch(failure());
    }
};

const getSingleProduct = (id) => async (dispatch) => {
    dispatch(request());
    try {
        let response = await axios.get(`http://localhost:8080/data/${id}`);
        let data = await response.data;
        dispatch(successSingleProduct(data));
    } catch (error) {
        dispatch(failure());
    }
};

export { getCategory, getProducts, getSingleProduct, getFilteredProducts };
