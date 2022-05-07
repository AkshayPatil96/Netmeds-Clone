import {
    FAILURE_METHOD,
    REQUEST_METHOD,
    SUCCESS_CATEGORY_METHOD,
    SUCCESS_FILTER_METHOD,
    SUCCESS_PRODUCT_METHOD,
    SUCCESS_SINGLE_PRODUCT_METHOD,
} from "./actionType";

const initState = {
    data: [],
    productData: [],
    singleData: [],
    isLoading: false,
    isError: false,
    filteredBrandData: [],
    filteredSellerData: [],
    pageNum: 1,
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case REQUEST_METHOD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case SUCCESS_CATEGORY_METHOD:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: payload,
            };

        case SUCCESS_PRODUCT_METHOD:
            return {
                ...state,
                isLoading: false,
                isError: false,
                productData: payload,
            };

        case SUCCESS_FILTER_METHOD:
            return {
                ...state,
                isLoading: false,
                isError: false,
                filteredBrandData: payload,
            };

        case SUCCESS_SINGLE_PRODUCT_METHOD:
            return {
                ...state,
                isLoading: false,
                isError: false,
                singleData: payload,
            };

        case FAILURE_METHOD:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
};

export { reducer };
