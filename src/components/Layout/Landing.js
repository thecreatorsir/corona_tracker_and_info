import React from "react";
import SelectedCountry from "../stats-and-charts/SelectedCountry";
import Chart from "../stats-and-charts/Chart";
import ExploreMore from "../explore-more/ExploreMore";
import Symptoms from "../covidinfo/Symptoms";
import Precautions from "../covidinfo/Precautions";
import WashHandSigns from "../directions/WashHandSigns";
function Landing() {
  return (
    <div className='Landing'>
      <SelectedCountry />
      <Chart />
      <ExploreMore />
      <Symptoms />
      <Precautions />
      <WashHandSigns />
    </div>
  );
}

export default Landing;
