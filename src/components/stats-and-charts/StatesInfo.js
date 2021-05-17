import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";
//api call
async function get(url) {
  //async will return the premise
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
}

class StatesInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadData: false,
      statesData: [],
    };
  }
  componentDidMount() {
    //for states
    get(`https://api.covid19india.org/data.json`).then((data) => {
      this.setState({
        loadData: true,
        statesData: data.statewise,
      });
    });
  }
  render() {
    const { loadData, statesData } = this.state;
    const data = statesData.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.state}</td>
          <td className='text-danger'>{data.confirmed}</td>
          <td className='text-success'>{data.recovered}</td>
          <td className='text-muted'>{data.deaths}</td>
        </tr>
      );
    });

    if (!loadData) {
      return <Loading />;
    } else {
      return (
        <div className='container'>
          <div className='back-btn'>
            <Link to='/'>Back to home</Link>
          </div>
          <div className='states-data-container'>
            <div className='h2 text-center text-muted tablehead'>
              Statewise Data
            </div>
            <table className='table table-sm'>
              <thead>
                <tr>
                  <th scope='col'>States</th>
                  <th scope='col' className='text-danger'>
                    Cases
                  </th>
                  <th scope='col' className='text-success'>
                    Recovered
                  </th>
                  <th scope='col' className='text-muted'>
                    Deaths
                  </th>
                </tr>
              </thead>
              <tbody>{data}</tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default StatesInfo;
