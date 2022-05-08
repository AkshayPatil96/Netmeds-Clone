import {
  ADD_NEW_USER,
  GET_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  DELETE_PRODUCT,
} from "./actionType";
const initState = {
  isError: false,
  isLoading: false,
  token: "",
  user: {},
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        token: action.payload.token,
        user: { ...action.payload.userData },
      };

    case GET_USER:
      return {
        ...state,
        token: action.payload.token,
        user: { ...action.payload.userData },
      };

    case LOGOUT_USER:
      return {
        ...initState,
      };

    case ADD_TO_CART:
      return {
        ...state,
        user: {
          ...state.user,
          cart: [...state.user.cart, action.payload],
        },
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        user: {
          ...state.user,
          cart: [...action.payload],
        },
      };
    default:
      return state;
  }
};
