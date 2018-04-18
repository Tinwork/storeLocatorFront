/**
 * Get Visible Stores
 * 
 * @param {Array} stores 
 * @param {String} filter
 * @return {Array} stores
 */
export const getVisibleStores = (stores, filter, criteria) => {
  switch (filter) {
    case 'SHOW_ALL':
      return stores;
    case 'SHOW_BY_NAME':
      return stores.filter(s => s.retailer.retailer.includes(criteria));
    case 'SHOW_BY_LOCATION':
      return stores.filter(s => s.retailer.city === criteria.toLowerCase());
    default:
      return stores;
  }
};