import { USER_ACTION_TYPES } from '../types';

export const setCurrentUser = currentUser => {
  return async dispatch => {
    try {
      dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, currentUser });
    } catch (event) {
      console.log(event);
    }
  };
};
