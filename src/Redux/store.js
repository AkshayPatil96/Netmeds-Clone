import {
    legacy_createStore as createStore,
    compose,
    combineReducers,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Category/Categoryreducer";

const rootReducer = combineReducers({
    products: reducer,
});

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, enhancer);
