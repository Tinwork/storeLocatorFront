import { combineReducers } from 'redux';
import stores from './stores';
import input from './input';
import endpoint from './endpoint';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  endpoint,
  input,
  stores,
  visibilityFilter
});