import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import StatesInfo from "./components/stats-and-charts/StatesInfo";
import CovidInfo from "./components/covidinfo/CovidInfo";
function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route exact path='/' component={Landing} />
        <Route exact path='/state-info' component={StatesInfo} />
        <Route exact path='/more-info' component={CovidInfo} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
