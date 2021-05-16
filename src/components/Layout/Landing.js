import React from "react";
import Overall from "../stats-and-charts/Overall";
import Chart from "../stats-and-charts/Chart";
import ExploreMore from "../explore-more/ExploreMore";
import Symptoms from "../covidinfo/Symptoms";
import Precautions from "../covidinfo/Precautions";
import WashHandSigns from "../directions/WashHandSigns";
function Landing() {
  return (
    <div className='Landing'>
      <Overall />
      <Chart />
      <ExploreMore />
      <Symptoms />
      <Precautions />
      <WashHandSigns />
    </div>
  );
}

export default Landing;
