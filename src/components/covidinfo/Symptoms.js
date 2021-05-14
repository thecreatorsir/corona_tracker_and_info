import React, { Component } from "react";
import sore_throat from "../assets/images/sore_throats.jpg";
import cough from "../assets/images/cough.webp";
import feaver from "../assets/images/feaver.jpg";
import breathing from "../assets/images/breathing.png";
import Headache from "../assets/images/headache.jpg";
import tired from "../assets/images/tired.jpg";
class Symptoms extends Component {
  render() {
    return (
      <div className='symptom-container mt-5'>
        <h2 className='symptoms-heading'>Symptoms of COVID-19</h2>
        <hr />
        <div className='row mb-3 mt-3'>
          <div className='col-4'>
            <div className='card rounded-0 symptoms'>
              <div className='img-wrapper'>
                <img
                  className='card-img-top'
                  src={sore_throat}
                  alt='Card cap'
                />
              </div>
              <div className='card-body sym-title'>
                <h3 className='card-title'>Sore Throat</h3>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className='card rounded-0 symptoms'>
              <div className='img-wrapper'>
                <img className='card-img-top' src={cough} alt='Card cap' />
              </div>
              <div className='card-body sym-title'>
                <h3>Cough and Sneez</h3>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className='card rounded-0 symptoms'>
              <div className='img-wrapper'>
                <img className='card-img-top' src={feaver} alt='Card cap' />
              </div>
              <div className='card-body sym-title'>
                <h3 className='card-title'>High Fever</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col-4'>
            <div className='card rounded-0 symptoms'>
              <div className='img-wrapper'>
                <img className='card-img-top' src={breathing} alt='Card cap' />
              </div>
              <div className='card-body sym-title'>
                <h3 className='card-title'>Breathing Problem</h3>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className='card rounded-0 symptoms'>
              <div className='img-wrapper'>
                <img className='card-img-top' src={Headache} alt='Card cap' />
              </div>
              <div className='card-body sym-title'>
                <h3>Headache</h3>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className='card rounded-0 symptoms'>
              <div className='img-wrapper'>
                <img className='card-img-top' src={tired} alt='Card cap' />
              </div>
              <div className='card-body sym-title'>
                <h3 className='card-title'>Tiredness</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Symptoms;
