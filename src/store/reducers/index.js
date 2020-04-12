import { combineReducers } from 'redux';
import { userReducer } from './users';
import { cartReducer } from './cartReducer';

export const combinedReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
