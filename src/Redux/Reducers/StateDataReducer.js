import * as actionTypes from "../actionsTypes";
const initialstate = { states: [], loading: true };

const StateDataReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.SET_STATE_DATA:
      return { ...state, states: action.payload, loading: false };
    default:
      return state;
  }
};
export default StateDataReducer;
