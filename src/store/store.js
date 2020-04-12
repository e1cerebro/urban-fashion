import { createStore, applyMiddleware, compose } from 'redux';
import { combinedReducers } from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [thunk];

export const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);