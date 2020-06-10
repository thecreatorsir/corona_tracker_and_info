import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: {},
      options1: {},
      data2: {},
      options2: {},
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      data1: {
        labels: props.date,
        datasets: [
          {
            label: "cases",
            fill: false,
            borderColor: "rgb(252, 9, 13)",
            data: props.cases,
          },

          {
            label: "recovered",
            fill: false,
            borderColor: "rgb(28, 98, 12)",
            data: props.recovered,
          },
          {
            label: "deaths",
            fill: false,
            borderColor: "rgb(255, 99, 132)",
            data: props.deaths,
          },
        ],
      },

      options1: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "India stat of COVID-19",
          fontSize: 20,
        },
      },
      data2: {
        labels: props.predictionDates,
        datasets: [
          {
            label: "cases",
            fill: false,
            borderColor: "rgb(252, 9, 13)",
            data: props.predictCases,
          },
        ],
      },
      options2: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Predicted stat for next 15 day(India COVID-19)",
          fontSize: 20,
        },
      },
    };
  }
  render() {
    const { data1, options1, data2, options2 } = this.state;
    return (
      <>
        <div className='chart jumbotron'>
          <Line data={data1} options={options1} height={400} width={400} />
        </div>
        <div className='chart jumbotron'>
          <Line data={data2} options={options2} height={400} width={400} />
        </div>
      </>
    );
  }
}

export default chart;
