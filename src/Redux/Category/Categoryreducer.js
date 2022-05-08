import {
  FAILURE_METHOD,
  REQUEST_METHOD,
  SUCCESS_APPEND_METHOD,
  SUCCESS_CATEGORY_METHOD,
  SUCCESS_FILTER_METHOD,
  SUCCESS_MANUFACTURER_METHOD,
  SUCCESS_PRODUCT_METHOD,
  SUCCESS_SINGLE_PRODUCT_METHOD,
} from "./actionType";

const initState = {
  data: [],
  productData: [],
  displayData: [],
  singleData: [],
  isLoading: false,
  isError: false,
  filteredBrandData: [],
  filteredSellerData: [],
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

    case SUCCESS_APPEND_METHOD:
      return {
        ...state,
        isLoading: false,
        isError: false,
        displayData: payload,
      };

    case SUCCESS_FILTER_METHOD:
      return {
        ...state,
        isLoading: false,
        isError: false,
        productData: payload,
      };

    case SUCCESS_MANUFACTURER_METHOD:
      return {
        ...state,
        isLoading: false,
        isError: false,
        productData: payload,
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
