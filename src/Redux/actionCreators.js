import axios from "axios";
import * as actionTypes from "./actionsTypes";

export const getGlobalData = () => (dispatch) => {
  axios.get(`https://covid-19.dataflowkit.com/v1/world`).then((res) => {
    dispatch({
      type: actionTypes.SET_GLOBAL_DATA,
      payload: res.data,
    });
  });
};

export const getStateData = () => (dispatch) => {
  axios.get(`https://api.covid19india.org/data.json`).then((res) => {
    dispatch({
      type: actionTypes.SET_STATE_DATA,
      payload: res.data.statewise,
    });
  });
};

export const getSelectedData = (country) => (dispatch) => {
  axios.get(`https://covid-19.dataflowkit.com/v1/${country}`).then((res) => {
    dispatch({
      type: actionTypes.SET_SELECTED_DATA,
      payload: res.data,
    });
  });
};

export const getChartData = (country) => (dispatch) => {
  axios
    .get(`https://api.covid19api.com/total/country/${country}`)
    .then((res) => {
      let data = {
        country: res.data[0].Country,
        date: res.data.map((data) => data.Date),
        cases: res.data.map((data) => data.Confirmed),
        deaths: res.data.map((data) => data.Deaths),
        recovered: res.data.map((data) => data.Recovered),
      };
      dispatch({
        type: actionTypes.SET_CHART_DATA,
        payload: data,
      });
    });
};
