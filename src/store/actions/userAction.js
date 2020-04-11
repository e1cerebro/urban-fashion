import { SET_CURRENT_USER } from '../types';

export const setCurrentUser = currentUser => {
  return async dispatch => {
    try {
      dispatch({ type: SET_CURRENT_USER, currentUser });
    } catch (event) {
      console.log(event);
    }
  };
};
