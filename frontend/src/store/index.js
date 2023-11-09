import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
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

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;
