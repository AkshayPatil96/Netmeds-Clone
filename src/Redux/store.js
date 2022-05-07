import thunk from "redux-thunk";
import { reducer } from "./Category/Categoryreducer";
import { authReducer } from "./Auth/AuthReducer";
import {
  legacy_createStore as createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";

const rootReducer = combineReducers({
  products: reducer,
  isAuth: authReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
