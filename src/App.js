import React from "react";
import "./style.css";
import Nav from "./components/navbar/Nav";
import Chart from "./components/stats-and-charts/Chart";
import Overall from "./components/stats-and-charts/Overall";
import StatesInfo from "./components/stats-and-charts/StatesInfo";
import CovidInfo from "./components/covidinfo/CovidInfo";
import Footer from "./components/footer/Footer";
import Symptoms from "./components/covidinfo/Symptoms";
import WashHandSigns from "./components/directions/WashHandSigns";
import Precautions from "./components/covidinfo/Precautions";
import ExploreMore from "./components/explore-more/ExploreMore";
function App() {
  return (
    <div className='App'>
      <Nav />
      {/* <Header /> */}
      {/* <SocialLink /> */}
      <Overall />
      <Chart />
      <ExploreMore />
      <StatesInfo />
      <CovidInfo />
      <Symptoms />
      <Precautions />
      <WashHandSigns />
      <Footer />
    </div>
  );
}

export default App;
