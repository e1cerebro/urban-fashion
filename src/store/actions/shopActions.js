import { SHOP_ACTIONS } from '../types';

export const updateCollections = collections => {
  return async dispatch => {
    try {
      dispatch({ type: SHOP_ACTIONS.UPDATE_COLLECTIONS, collections });
    } catch (error) {
      console.log(error);
    }
  };
};
