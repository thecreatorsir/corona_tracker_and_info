import * as actionTypes from "../actionsTypes";
const initialstate = { country_data: {} };

const SelectedDataReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_DATA:
      return { ...state, country_data: action.payload };
    default:
      return state;
  }
};
export default SelectedDataReducer;
