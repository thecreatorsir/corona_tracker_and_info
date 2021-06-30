import { combineReducers } from "redux";
import GlobalDataReducer from "./GlobalDataReducer";
import StateDataReducer from "./StateDataReducer";
import SelectedDataReducer from "./SelectedDataReducer";
import ChartDataReducer from "./ChartDataReducer";

export default combineReducers({
  GlobalData: GlobalDataReducer,
  StatesData: StateDataReducer,
  SelectedData: SelectedDataReducer,
  ChartData: ChartDataReducer,
});
