import * as actionTypes from "../actionsTypes";
const initialstate = { chart_data: {} };

const ChartDataReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.SET_CHART_DATA:
      return { ...state, chart_data: action.payload };
    default:
      return state;
  }
};
export default ChartDataReducer;
