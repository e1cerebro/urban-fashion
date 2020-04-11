import { combineReducers } from 'redux';
import { userReducer } from './users';

export const combinedReducers = combineReducers({
  user: userReducer,
});
