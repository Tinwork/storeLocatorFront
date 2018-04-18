/**
 * Stores
 * 
 * @param {Array} state 
 * @param {Object} action 
 */
const stores = (state = [], action) => {
  switch(action.type) {
    case 'ADD_STORES':
      console.log('add store');
      
      return [
        ...state,
        ...action.datas
      ]
    default:
      return state;
  }
};

export default stores;