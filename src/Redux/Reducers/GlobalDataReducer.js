import * as actionTypes from "../actionsTypes";
const initialstate = { world: {} };

const GlobalDataReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.SET_GLOBAL_DATA:
      return { ...state, world: action.payload };
    default:
      return state;
  }
};
export default GlobalDataReducer;
