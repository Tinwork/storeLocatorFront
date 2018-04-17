import { combineReducers } from 'redux';
import stores from './stores';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  stores,
  visibilityFilter
});