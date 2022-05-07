import { ADD_NEW_USER, GET_USER, LOGOUT_USER } from "./actionType";
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
    default:
      return state;
  }
};
