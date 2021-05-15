import React, { Component } from "react";
import ChartUtil from "./ChartUtil";
import CountryOptions from "./CountryOptions";
//api call
async function get(url) {
  //async will return the premise
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
}

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: [],
      cases: [],
      deaths: [],
      recovered: [],
      country: "India",
    };

    this.get_country_graph = this.get_country_graph.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // //for country wise stat

    if (prevState.country !== this.state.country) {
      get(
        `https://api.covid19api.com/total/country/${this.state.country}`
      ).then((data) => {
        this.setState({
          date: data.map((data) => data.Date),
          cases: data.map((data) => data.Confirmed),
          deaths: data.map((data) => data.Deaths),
          recovered: data.map((data) => data.Recovered),
        });
      });
    }
  }

  componentDidMount() {
    //getting data for graph
    get(`https://api.covid19api.com/total/country/${this.state.country}`).then(
      (data) => {
        this.setState({
          date: data.map((data) => data.Date),
          cases: data.map((data) => data.Confirmed),
          deaths: data.map((data) => data.Deaths),
          recovered: data.map((data) => data.Recovered),
        });
      }
    );
  }

  get_country_graph(value) {
    this.setState({
      country: value,
    });
  }

  render() {
    const { date, cases, deaths, recovered, country } = this.state;
    return (
      <div className='container'>
        <div className='jumbotron chart-container'>
          <CountryOptions
            get_country_graph={this.get_country_graph}
            call_by='graph'
          />
          <div className='chart'>
            <ChartUtil
              date={date}
              cases={cases}
              deaths={deaths}
              recovered={recovered}
              country={country}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Chart;
