import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import StatesInfo from "./components/stats-and-charts/StatesInfo";
import CovidInfo from "./components/covidinfo/CovidInfo";
import VaccinationInfo from "./components/stats-and-charts/VaccinationInfo";
import ScrollToTop from "./components/common/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Nav />
        <Route exact path='/' component={Landing} />
        <Route exact path='/state-info' component={StatesInfo} />
        <Route exact path='/more-info' component={CovidInfo} />
        <Route exact path='/vaccination-info' component={VaccinationInfo} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
