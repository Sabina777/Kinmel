import {
  CARD_ADD_ITEM,
  CARD_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

//cart reducer

export const cartReducers = (
  state = { cartItems: [], shippingAddress: {}, paymentMethod: "" },
  action
) => {
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
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        //add the whole new item to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CARD_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
