import { SHOP_ACTIONS } from '../types';
const INITIAL_STATE = {
  collections: null,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTIONS.FETCH_PRODUCTS:
      return { ...state };
    case SHOP_ACTIONS.UPDATE_COLLECTIONS:
      return { ...state, collections: action.collections };
    default:
      return state;
  }
};
