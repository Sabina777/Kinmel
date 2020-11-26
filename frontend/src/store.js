import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducers,
  productDetailsReducers,
} from "./reducers/productReducers";

import { cartReducers } from "./reducers/cartReducers";
//combine reducer
const reducer = combineReducers({
  productList: productListReducers,
  productDetail: productDetailsReducers,
  cart: cartReducers,
});
//get cartItems from the localStorage

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItmes"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

//store middleware in a variable
const middleware = [thunk];

//create main store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
