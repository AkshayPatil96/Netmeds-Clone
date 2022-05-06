import axios from "axios";
import { FAILURE_METHOD, REQUEST_METHOD, SUCCESS_METHOD } from "./actionType";

const request = () => ({
    type: REQUEST_METHOD,
});

const success = (payload) => ({
    type: SUCCESS_METHOD,
    payload,
});

const failure = () => ({
    type: FAILURE_METHOD,
});

// const getProducts = (id) => async (dispatch) => {
//     dispatch(request());
//     try {
//         let response = await axios.get(`http://localhost:8080/products/${id}`);
//         let data = await response.data;
//         dispatch(success(data));
//     } catch (error) {
//         dispatch(failure());
//     }
// };

const getCategory = (category) => async (dispatch) => {
    dispatch(request());
    try {
        let response = await axios.get(
            `http://localhost:8080/products/${category}`
        );
        let data = await response.data;
        dispatch(success(data));
    } catch (error) {
        dispatch(failure());
    }
};

export { getCategory };
