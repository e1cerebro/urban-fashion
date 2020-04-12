import { USER_ACTION_TYPES } from '../types';

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: action.currentUser };
    default:
      return state;
  }
};
