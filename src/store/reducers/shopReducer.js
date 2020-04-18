import { SHOP_ACTIONS } from '../types';
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: null,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTIONS.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case SHOP_ACTIONS.FETCH_COLLECTIONS_SUCCESSFUL:
      return { ...state, isFetching: false, collections: action.collections };
    case SHOP_ACTIONS.FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.error };
    default:
      return state;
  }
};
