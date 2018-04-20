/**
 * Stores::Store
 * 
 * @param {Object} state 
 * @param {Object} action 
 */
const stores = (state = [], action) => {
  switch(action.type) {
    case 'ADD_STORES':      
      return [
        ...state,
        ...action.datas
      ]
    case 'RESET_STORE':
      state = [];
      return state;
    default:
      return state;
  }
};

export default stores;