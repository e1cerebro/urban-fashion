import { CART_ACTION_TYPES } from '../types';

export const toggleCartHidden = () => {
  return async dispatch => {
    try {
      dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addItem = item => {
  return async dispatch => {
    try {
      dispatch({ type: CART_ACTION_TYPES.ADD_ITEM, item });
    } catch (e) {
      console.log(e);
    }
  };
};
export const removeCartItem = item => {
  return async dispatch => {
    try {
      dispatch({ type: CART_ACTION_TYPES.REMOVE_CART_ITEM, item });
    } catch (e) {
      console.log(e);
    }
  };
};

export const decreaseCartItem = item => {
  return async dispatch => {
    try {
      dispatch({ type: CART_ACTION_TYPES.DECREASE_CART_ITEM, item });
    } catch (e) {
      console.log(e);
    }
  };
};
