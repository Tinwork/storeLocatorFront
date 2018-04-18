/**
 * Input::Store
 * 
 * @param {Object} state 
 * @param {Object} action 
 */
const input = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return {
        ...state,
        value: action.datas
      }
    default:
      return state;
  }
};

export default input;