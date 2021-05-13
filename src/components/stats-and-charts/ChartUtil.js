import React, { Component } from "react";
import Chart from "./Chart";
//api call
async function get(url) {
  //async will return the premise
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
}

class Apis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadData: false,
      date: [],
      cases: [],
      deaths: [],
      recovered: [],
    };
  }
  componentDidMount() {
    //getting data for graph
    get(`https://api.covid19api.com/total/country/india`).then((data) => {
      this.setState({
        loadData: true,
        date: data.map((data) => data.Date),
        cases: data.map((data) => data.Confirmed),
        deaths: data.map((data) => data.Deaths),
        recovered: data.map((data) => data.Recovered),
      });
    });
  }

  render() {
    const { loadData, date, cases, deaths, recovered } = this.state;

    if (!loadData) {
      return <div className='display-4'>loading....</div>;
    } else {
      return (
        <>
          <div className='container'>
            <Chart
              date={date}
              cases={cases}
              deaths={deaths}
              recovered={recovered}
            />
          </div>
        </>
      );
    }
  }
}

export default Apis;
