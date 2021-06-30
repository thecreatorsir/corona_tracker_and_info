import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGlobalData } from "../../Redux/actionCreators";
const GlobalData = (props) => {
  const { world } = props.world;
  const { getGlobalData } = props;
  useEffect(() => {
    getGlobalData();
  }, [getGlobalData]);
  return (
    <div className='global-data-container'>
      <p className='global-data-heading'>Global Stats</p>
      <div className='global_data'>
        <ul>
          <li>
            {world["Total Cases_text"]} <small>Confirmed cases</small>
          </li>
          <li>
            {world["Total Deaths_text"]} <small>Death cases</small>
          </li>
          <li>
            {world["Total Recovered_text"]} <small>Recovered cases</small>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  world: state.GlobalData,
});

export default connect(mapStateToProps, { getGlobalData })(GlobalData);
