import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducers } from "./reducers/productReducers";
//combine reducer
const reducer = combineReducers({
  productList: productListReducers,
});

const initialState = {};

//store middleware in a variable
const middleware = [thunk];

//create main store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
