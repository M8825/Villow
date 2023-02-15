import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from './usersReducer';
import listingsReducer from './listingsReducer';
import geocodeReducer from './geocodeReducer';

const rootReducer = combineReducers({
  user: usersReducer,
  listings: listingsReducer,
  geocode: geocodeReducer
});

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;
