// Visibility Filters constant
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_BY_NAME: 'SHOW_BY_NAME',
  SHOW_BY_LOCATION: 'SHOW_BY_LOCATION'
};

/**
 * Add Stores
 * 
 * @param {Array} stores 
 */
export const addStores = stores => ({
  type: 'ADD_STORES',
  stores
});

/**
 * Set Visibility Filter
 * 
 * @param {String} filter 
 */
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});