import { combineReducers } from 'redux';
import stores from './stores';
import input from './input';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  input,
  stores,
  visibilityFilter
});