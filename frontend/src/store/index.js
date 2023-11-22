import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './usersReducer';
import listingsReducer from './listingsReducer';
import geocodeReducer from './geocodeReducer';
import searchSuggestionsReducer from './search';
import searchFiltersReducer from './searchFilters';

const rootReducer = combineReducers({
  session: usersReducer,
  listings: listingsReducer,
  geocode: geocodeReducer,
  search: searchSuggestionsReducer,
  searchFilter: searchFiltersReducer,
});


let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  middleware = [...middleware, createLogger()];
}

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(...middleware))
);

export default configureStore;
