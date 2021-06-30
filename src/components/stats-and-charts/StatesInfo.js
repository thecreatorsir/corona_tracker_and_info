import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";
import { getStateData } from "../../Redux/actionCreators";

const StatesInfo = (props) => {
  const { getStateData } = props;
  const { states, loading } = props.StatesData;
  useEffect(() => {
    getStateData();
  }, [getStateData]);
  const data = states.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.state}</td>
        <td className='text-danger'>{data.confirmed}</td>
        <td className='text-success'>{data.recovered}</td>
        <td className='text-muted'>{data.deaths}</td>
      </tr>
    );
  });

  if (loading) {
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
};

const mapStateToProps = (state) => ({
  StatesData: state.StatesData,
});
export default connect(mapStateToProps, { getStateData })(StatesInfo);
