import axios from "axios";
import {
    FAILURE_METHOD,
    REQUEST_METHOD,
    SUCCESS_APPEND_METHOD,
    SUCCESS_CATEGORY_METHOD,
    SUCCESS_DISCOUNT_METHOD,
    SUCCESS_FILTER_METHOD,
    SUCCESS_MANUFACTURER_METHOD,
    SUCCESS_PRODUCT_METHOD,
    SUCCESS_SINGLE_PRODUCT_METHOD,
    SUCCESS_SORT_H2L_METHOD,
    SUCCESS_SORT_L2H_METHOD,
} from "./actionType";

const request = (payload) => ({
    type: REQUEST_METHOD,
    payload,
});

const successCategory = (payload) => ({
    type: SUCCESS_CATEGORY_METHOD,
    payload,
});

const successProduct = (payload) => ({
    type: SUCCESS_PRODUCT_METHOD,
    payload,
});

const successDisplay = (payload) => ({
    type: SUCCESS_APPEND_METHOD,
    payload,
});

const successBrandFilter = (payload) => ({
    type: SUCCESS_FILTER_METHOD,
    payload,
});

const successManufacturerFilter = (payload) => ({
    type: SUCCESS_MANUFACTURER_METHOD,
    payload,
});

const high2Low = (payload) => ({
    type: SUCCESS_SORT_H2L_METHOD,
    payload,
});

const low2High = (payload) => ({
    type: SUCCESS_SORT_L2H_METHOD,
    payload,
});

const discount = (payload) => ({
    type: SUCCESS_DISCOUNT_METHOD,
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

// to get Category data

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

// to get product data

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

// to sort products High to Low order

const sortingH2L = (category, product) => async (dispatch) => {
    dispatch(request());
    try {
        let response = await axios.get(
            `http://localhost:8080/data?category=${category}&type=${product}`
        );
        let data = await response.data;
        let sortHigh = data.sort((a, b) => b.salePrice - a.salePrice);
        dispatch(successProduct(sortHigh));
    } catch (error) {
        dispatch(failure());
    }
};

// to sort products Low to High order

const sortingL2H = (category, product) => async (dispatch) => {
    dispatch(request());
    try {
        let response = await axios.get(
            `http://localhost:8080/data?category=${category}&type=${product}`
        );
        let data = await response.data;
        let sortHigh = data.sort((a, b) => a.salePrice - b.salePrice);
        dispatch(successProduct(sortHigh));
    } catch (error) {
        dispatch(failure());
    }
};

// to sort products by discount

const discountData = (category, product) => async (dispatch) => {
    dispatch(request());
    try {
        let response = await axios.get(
            `http://localhost:8080/data?category=${category}&type=${product}`
        );
        let data = await response.data;
        let dis = data.sort(
            (a, b) =>
                ((b.strikeOfPrice - b.salePrice) / b.strikeOfPrice) * 100 -
                ((a.strikeOfPrice - a.salePrice) / a.strikeOfPrice) * 100
        );
        dispatch(successProduct(dis));
    } catch (error) {
        dispatch(failure());
    }
};

// to filter products by brands

const getFilteredProducts = (category, product, brand) => async (dispatch) => {
    dispatch(request());
    try {
        let response = await axios.get(
            `http://localhost:8080/data?category=${category}&type=${product}&brand=${brand}`
        );
        let data = await response.data;
        dispatch(successProduct(data));
    } catch (error) {
        dispatch(failure());
    }
};

// to filter products by manufacturers

const getFilteredManufacturers =
    (category, product, brand) => async (dispatch) => {
        dispatch(request());
        try {
            let response = await axios.get(
                `http://localhost:8080/data?category=${category}&type=${product}&seller=${brand}`
            );
            let data = await response.data;
            dispatch(successProduct(data));
        } catch (error) {
            dispatch(failure());
        }
    };

//   to get single product data

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

export {
    getCategory,
    getProducts,
    sortingH2L,
    sortingL2H,
    discountData,
    getSingleProduct,
    getFilteredProducts,
    getFilteredManufacturers,
};
