import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
const middleware = [thunk];
const initialstate = {};
const store = createStore(
  rootReducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
