import { FAILURE_METHOD, REQUEST_METHOD, SUCCESS_METHOD } from "./actionType";

const initState = {
    data: [],
    isLoading: false,
    isError: false,
    filterData: [],
    products: [],
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case REQUEST_METHOD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case SUCCESS_METHOD:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: payload,
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
