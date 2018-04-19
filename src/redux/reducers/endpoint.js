/**
 * Endpoint::Store
 * 
 * @param {Object} state 
 * @param {Object} action 
 */
const endpoint = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ENDPOINT':
      return {
        ...state,
        value: action.datas
      }
    default:
      return state;
  }
};

export default endpoint;