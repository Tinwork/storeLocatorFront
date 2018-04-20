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
  datas: stores
});

/**
 * Reset Stores
 */
export const resetStores = () => ({
  type: 'RESET_STORE',
  datas: null
});

/**
 * Add Input
 * 
 * @param {String} input 
 */
export const addInput = input => ({
  type: 'ADD_INPUT',
  datas: input
});

/**
 * Add Endpoint
 * 
 * @param {String} input 
 */
export const addEndpoint = input => ({
  type: 'ADD_ENDPOINT',
  datas: input
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