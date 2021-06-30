import React, { useState, useEffect } from "react";
import ChartUtil from "./ChartUtil";
import CountryOptions from "./CountryOptions";
import { connect } from "react-redux";
import { getChartData } from "../../Redux/actionCreators";

const Chart = (props) => {
  const { chart_data } = props.ChartData;
  const { getChartData } = props;
  const [country, setcountry] = useState("India");
  useEffect(() => {
    getChartData(country);
  }, [getChartData, country]);

  const get_country_graph = (value) => {
    setcountry(value);
  };

  return (
    <div className='container'>
      <div className='jumbotron chart-container'>
        <CountryOptions get_country_graph={get_country_graph} call_by='graph' />
        <div className='chart'>
          <ChartUtil
            date={chart_data.date}
            cases={chart_data.cases}
            deaths={chart_data.deaths}
            recovered={chart_data.recovered}
            country={chart_data.country}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ChartData: state.ChartData,
});

export default connect(mapStateToProps, { getChartData })(Chart);
