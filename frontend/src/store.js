import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//combine reducer
const reducer = combineReducers({});

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
