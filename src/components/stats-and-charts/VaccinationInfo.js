import React from "react";
import { Link } from "react-router-dom";
function VaccinationInfo() {
  return (
    <div className='container'>
      <div className='back-btn'>
        <Link to='/'>Back to home</Link>
      </div>

      <div className='vaccination-container'>
        <h1>Info currently not available</h1>
      </div>
    </div>
  );
}

export default VaccinationInfo;
