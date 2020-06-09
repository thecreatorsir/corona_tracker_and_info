import React, { Component } from "react";

class cards extends Component {
  render() {
    const { India, world } = this.props;

    return (
      <>
        <h1 className='main-head'>Corona Updates</h1>
        <div className='cards'>
          <div className='card border-info mb-3 card1'>
            <div className='card-header h3'>India</div>
            <div className='card-body text-info data-container'>
              <span className='data1'>
                <h5 className='card-title'>Total Cases</h5>
                <div className='card-text'>{India["Total Cases_text"]}</div>
                <div className='card-text'>
                  <small>{India["New Cases_text"]}</small>
                </div>
              </span>
              <span className='data2'>
                <h5 className='card-title'>Recovered</h5>
                <div className='card-text'>{India["Total Recovered_text"]}</div>
              </span>
              <span className='data3'>
                <h5 className='card-title'>Deaths</h5>
                <div className='card-text'>{India["Total Deaths_text"]}</div>
                <div className='card-text'>
                  <small>{India["New Deaths_text"]}</small>
                </div>
              </span>
            </div>
            <div className='card-footer text-muted message text-info card-text'>
              Last Update: {India["Last Update"]}
            </div>
          </div>
          <div className='card border-info mb-3 card1'>
            <div className='card-header h3'>World</div>
            <div className='card-body text-info data-container'>
              <span className='data1'>
                <h5 className='card-title'>Total Cases</h5>
                <div className='card-text'>{world["Total Cases_text"]}</div>
                <div>
                  <small>{world["New Cases_text"]}</small>
                </div>
              </span>
              <span className='data2'>
                <h5 className='card-title'>Recovered</h5>
                <div className='card-text'>{world["Total Recovered_text"]}</div>
              </span>
              <span className='data3'>
                <h5 className='card-title'>Deaths</h5>
                <div className='card-text'>{world["Total Deaths_text"]}</div>
                <div>
                  <small>{world["New Deaths_text"]}</small>
                </div>
              </span>
            </div>
            <div className='card-footer text-muted message text-info card-text'>
              Last Update: {world["Last Update"]}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default cards;