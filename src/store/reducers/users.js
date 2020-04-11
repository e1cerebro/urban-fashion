import { SET_CURRENT_USER } from '../types';

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.currentUser };
    default:
      return state;
  }
};
