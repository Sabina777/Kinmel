import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from "../constants/cartConstants";

//cart reducer

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CARD_ADD_ITEM:
      const item = action.payload;
      //find the existing product of the cart
      const existItem = state.cartItems.find((x) => x.product === item.product);

      //if the item already existed in the cart, then only iincrease the qty
      if (existItem) {
        //replace the old item with new item
        return {
          ...state,
          cartItems: state.cartItems.map((x) => x.product === item.product)
            ? item
            : [...state.cartItems],
        };
      } else {
        //add the whole new item to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
