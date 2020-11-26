import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from "../constants/cartConstants";
import axios from "axios";

//add to cart actions functions
const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = axios.get(`/api/products/${id}`);
  //dispatch

  dispatch({
    type: CARD_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
};

//store the items of the cart in local storage
localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
