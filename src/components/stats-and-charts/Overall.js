import React, { Component } from "react";
import CountryOptions from "./CountryOptions";
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
      world: {},
      country: "India",
      country_data: {},
    };
    this.get_country = this.get_country.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // //for country wise stat
    if (prevState.country !== this.state.country) {
      get(`https://covid-19.dataflowkit.com/v1/${this.state.country}`).then(
        (data) => {
          this.setState({
            country_data: data,
          });
        }
      );
    }
  }
  componentDidMount() {
    //for world
    get(`https://covid-19.dataflowkit.com/v1/world`).then((data) => {
      this.setState({
        world: data,
      });
    });

    get(`https://covid-19.dataflowkit.com/v1/${this.state.country}`).then(
      (data) => {
        this.setState({
          country_data: data,
        });
      }
    );
  }

  get_country(value) {
    console.log("test");
    this.setState({
      country: value,
    });
  }
  render() {
    const { world, country_data } = this.state;
    return (
      <div className='container'>
        <div className='mt-5 mb-5'>
          <div className='row'>
            <div className='col-md-2 text-center covid-short-info'>
              <p>
                Coronavirus disease (COVID-19) is an infectious disease caused
                by a new virus that had not been previously identified in
                humans.
              </p>
            </div>
            <div className='col-md-6 card-container'>
              <div className='row p-3'>
                <div className='col-8'>
                  <h3 className='card-heading'>{this.state.country}</h3>
                </div>
                <div className='col-4'>
                  <CountryOptions get_country={this.get_country} />
                </div>
              </div>
              <div className='row p-3'>
                <div className='col-4 text-center'>
                  <div className='figures'>
                    {" "}
                    {country_data["Total Deaths_text"]}
                  </div>
                  <p className='figures-label'>Deaths</p>
                </div>
                <div className='col-4 text-center'>
                  <div className='figures'>
                    {" "}
                    {country_data["Total Recovered_text"]}
                  </div>
                  <p className='figures-label'>Recovered</p>
                </div>
                <div className='col-4 text-center'>
                  <div className='figures'>
                    {" "}
                    {country_data["Total Cases_text"]}
                  </div>
                  <p className='figures-label'>Confirmed</p>
                </div>
              </div>
              <div className='row pl-4 pb-2'>
                <small>last updated an hour ago</small>
              </div>
            </div>
            <div className='col-md-3 global-data-container'>
              <p className='heading global-data-heading'>Global Stats</p>
              <div className='global_data'>
                <ul>
                  <li>
                    {world["Total Cases_text"]} <small>Confirmed cases</small>
                  </li>
                  <li>
                    {world["Total Deaths_text"]} <small>Death cases</small>
                  </li>
                  <li>
                    {world["Total Recovered_text"]}{" "}
                    <small>Recovered cases</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
