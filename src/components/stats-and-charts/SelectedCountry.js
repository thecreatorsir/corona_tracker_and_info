import React, { useEffect, useState } from "react";
import CountryOptions from "./CountryOptions";
import GlobalData from "./GlobalData";
import CountUp from "react-countup";
import { connect } from "react-redux";
import numeral from "numeral";
import VanillaTilt from "vanilla-tilt";
import { getSelectedData } from "../../Redux/actionCreators";

const SelectedCountry = (props) => {
  const { getSelectedData } = props;
  const { country_data } = props.SelectedData;

  const [country, setcountry] = useState("India");
  useEffect(() => {
    getSelectedData(country);
  }, [country, getSelectedData]);

  useEffect(() => {
    VanillaTilt.init(document.querySelector(".card-container"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.8,
      scale: 1.07,
    });
  }, []);

  const get_country = (value) => {
    setcountry(value);
  };
  let Deaths = numeral(country_data["Total Deaths_text"]);
  let Recovered = numeral(country_data["Total Recovered_text"]);
  let Confirmed = numeral(country_data["Total Cases_text"]);

  return (
    <div className='mt-5 mb-5'>
      <div className='row'>
        <div className='col-md-3 col-12'>
          <div className='text-center covid-short-info'>
            <p>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a new virus that had not been previously identified in humans.
            </p>
          </div>
        </div>
        <div className='col-md-6 col-12'>
          <div className='card-container'>
            <div className='row p-3'>
              <div className='col-md-8 col-6'>
                <h3 className='card-heading'>{country}</h3>
              </div>
              <div className='col-md-4 col-6'>
                <CountryOptions get_country={get_country} />
              </div>
            </div>
            <div className='row p-3'>
              <div className='col-4 text-center'>
                <div className='figures'>
                  {" "}
                  {
                    ((Deaths = isNaN(Deaths._value) ? 0 : Deaths._value),
                    (<CountUp end={Deaths} separator={","} />))
                  }
                </div>
                <p className='figures-label'>Deaths</p>
              </div>
              <div className='col-4 text-center'>
                <div className='figures'>
                  {" "}
                  {
                    ((Recovered = isNaN(Recovered._value)
                      ? 0
                      : Recovered._value),
                    (<CountUp end={Recovered} separator={","} />))
                  }
                </div>
                <p className='figures-label'>Recovered</p>
              </div>
              <div className='col-4 text-center'>
                <div className='figures'>
                  {" "}
                  {
                    ((Confirmed = isNaN(Confirmed._value)
                      ? 0
                      : Confirmed._value),
                    (<CountUp end={Confirmed} separator={","} />))
                  }
                </div>
                <p className='figures-label'>Confirmed</p>
              </div>
            </div>
            <div className='row pl-4 pb-2'>
              <small>last updated an hour ago</small>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-12'>
          <GlobalData />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  SelectedData: state.SelectedData,
});

export default connect(mapStateToProps, { getSelectedData })(SelectedCountry);
