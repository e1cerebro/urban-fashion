import { CART_ACTION_TYPES } from '../types';
import { addItemToCart, removeCartItem, decreaseCartItem } from './cart-utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CART_ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item),
      };
    case CART_ACTION_TYPES.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.item),
      };
    case CART_ACTION_TYPES.DECREASE_CART_ITEM:
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, action.item),
      };
    default:
      return state;
  }
};
