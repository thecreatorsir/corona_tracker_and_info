import React from "react";
import Nav from "./components/nav";
import Api from "./components/apis";
import Social from "./components/socialLink";
import Info from "./components/info";
import Footer from "./components/footer";
import Symptom from "./components/symptom";
import Washhand from "./components/wash_hands";
import Precautions from "./components/precautions";
import "./style.css";
import img1 from "./components/images/panel2.jpg";
function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='panel-container'>
        <img className='panel' src={img1} alt='panel' />
        <div className='panel-text'>Covid-19 The Pendamic</div>
      </div>
      <Social />
      <div className='container'>
        <Api />
      </div>
      <Info />
      <Symptom />
      <Precautions />
      <Washhand />
      <Footer />
    </div>
  );
}

export default App;
