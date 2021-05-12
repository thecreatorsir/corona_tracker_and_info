import React from "react";
import "./style.css";
import Nav from "./components/navbar/Nav";
import Api from "./components/Apis";
import SocialLink from "./components/utils/SocialLink";
import CovidInfo from "./components/covidinfo/CovidInfo";
import Footer from "./components/footer/Footer";
import Symptoms from "./components/covidinfo/Symptoms";
import WashHandSigns from "./components/directions/WashHandSigns";
import Precautions from "./components/covidinfo/Precautions";
import Header from "./components/header/Header";
function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <SocialLink />
      <Api />
      <CovidInfo />
      <Symptoms />
      <Precautions />
      <WashHandSigns />
      <Footer />
    </div>
  );
}

export default App;
