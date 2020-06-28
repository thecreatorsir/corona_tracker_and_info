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
function App() {
  return (
    <div className='App'>
      <Nav />

      <header className='header'>
        <div className='description '>
          <div className='header-title'>Covid-19 The Pendamic</div>
        </div>
      </header>
      <Social />
      <Api />
      <Info />
      <Symptom />
      <Precautions />
      <Washhand />
      <Footer />
    </div>
  );
}

export default App;
