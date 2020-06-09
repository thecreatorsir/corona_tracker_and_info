import React, { Component } from "react";
import Card from "./cards";
import Chart from "./chart";

//api call
async function get(url) {
  //async will return the premise
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
}

class apis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      India: {},
      world: {},
      isloaded: false,
      loadData: false,
      date: [],
      cases: [],
      deaths: [],
      recovered: [],
      predictionDates: [],
      predictCases: [],
    };
  }
  componentDidMount() {
    //for india
    get("https://covid-19.dataflowkit.com/v1/india").then((data) => {
      this.setState({
        isloaded: true,
        India: data,
      });
    });

    //for world
    get(`https://covid-19.dataflowkit.com/v1/world`).then((data) => {
      this.setState({
        isloaded: true,
        world: data,
      });
    });

    //getting data for graph
    get(`https://covid19-api.org/api/timeline/IN`).then((data) => {
      this.setState({
        loadData: true,
        date: data.map((data) => data.last_update).reverse(),
        cases: data.map((data) => data.cases).reverse(),
        deaths: data.map((data) => data.deaths).reverse(),
        recovered: data.map((data) => data.recovered).reverse(),
      });
    });

    //for prediction
    get(`https://covid19-api.org/api/prediction/IN`).then((data) => {
      this.setState({
        loadData: true,
        predictionDates: data.map((data) => data.date),
        predictCases: data.map((data) => data.cases),
      });
    });
  }

  render() {
    const {
      isloaded,
      loadData,
      India,
      world,
      date,
      cases,
      deaths,
      recovered,
      predictionDates,
      predictCases,
    } = this.state;

    if (!isloaded && !loadData) {
      return <div className='display-4'>loading....</div>;
    } else {
      return (
        <div>
          <Card India={India} world={world} />
          <Chart
            date={date}
            cases={cases}
            deaths={deaths}
            recovered={recovered}
            predictionDates={predictionDates}
            predictCases={predictCases}
          />
        </div>
      );
    }
  }
}

export default apis;
