import React, { Component } from "react";

async function get(url) {
  //async will return the premise
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
}

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      India: {},
      world: {},
      isloaded: false,
    };
  }

  componentDidMount() {
    //for india
    get("https://covid-19.dataflowkit.com/v1/india").then((data) => {
      this.setState({
        isloaded: true,
        India: data,
      });
    });

    //for world
    get(`https://covid-19.dataflowkit.com/v1/world`).then((data) => {
      this.setState({
        isloaded: true,
        world: data,
      });
    });
  }
  render() {
    const { India, world, isloaded } = this.state;
    if (!isloaded) {
      return <div className='display-4'>loading....</div>;
    } else {
      return (
        <div className='container'>
          <h1 className='main-head'>Corona Updates</h1>
          <div className='row'>
            <div className='col-12 col-md-6'>
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
                  <span className='data2 ml-md-5 ml--5'>
                    <h5 className='card-title'>Recovered</h5>
                    <div className='card-text'>
                      {India["Total Recovered_text"]}
                    </div>
                  </span>
                  <span className='data3 ml-md-5 ml-xs-2'>
                    <h5 className='card-title'>Deaths</h5>
                    <div className='card-text'>
                      {India["Total Deaths_text"]}
                    </div>
                    <div className='card-text'>
                      <small>{India["New Deaths_text"]}</small>
                    </div>
                  </span>
                </div>
                <div className='card-footer text-muted message text-info card-text'>
                  Last Update: {India["Last Update"]}
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6'>
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
                  <span className='data2 ml-md-5 ml-sm-2'>
                    <h5 className='card-title'>Recovered</h5>
                    <div className='card-text'>
                      {world["Total Recovered_text"]}
                    </div>
                  </span>
                  <span className='data3 ml-md-5 ml-sm-2'>
                    <h5 className='card-title'>Deaths</h5>
                    <div className='card-text'>
                      {world["Total Deaths_text"]}
                    </div>
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
          </div>
        </div>
      );
    }
  }
}

export default Cards;
