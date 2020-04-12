import { combineReducers } from 'redux';
import { userReducer } from './users';
import { cartReducer } from './cartReducer';
import { shopReducer } from './shopReducer';
import { categoryReducer } from './categoryReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'category'],
};

export const combinedReducers = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer,
    shop: shopReducer,
  })
);
