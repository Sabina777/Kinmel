import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducers,
  productDetailsReducers,
} from "./reducers/productReducers";
import { userLoginReducer } from "./reducers/userReducers";
import { cartReducers } from "./reducers/cartReducers";

//combine reducer
const reducer = combineReducers({
  productList: productListReducers,
  productDetail: productDetailsReducers,
  cart: cartReducers,
  userLogin: userLoginReducer,
});
//get cartItems from the localStorage

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const usersInfoFromStorage = localStorage.getItem("usersInfo")
  ? JSON.parse(localStorage.getItem("usersInfo"))
  : [];

//todo item from storage

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: {
    usersInfo: usersInfoFromStorage,
  },
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
