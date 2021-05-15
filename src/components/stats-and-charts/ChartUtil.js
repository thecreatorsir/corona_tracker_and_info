import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class ChartUtil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: {},
      options1: {},
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
          text: `${props.country} stat of COVID-19`,
          fontSize: 20,
        },
      },
    };
  }
  render() {
    const { data1, options1 } = this.state;
    return <Line data={data1} options={options1} height={400} width={400} />;
  }
}

export default ChartUtil;
