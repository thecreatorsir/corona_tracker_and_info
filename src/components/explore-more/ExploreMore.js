import React from "react";
import { Link } from "react-router-dom";
function ExploreMore() {
  return (
    <div className='container'>
      <div className='row explore-more-container'>
        <div className='col-md-4'>
          <Link to='/more-info'>
            <div className='more-info'>
              More Info <i className='fal fa-chevron-right'></i>
            </div>
          </Link>
        </div>
        <div className='col-md-4'>
          <Link to='/state-info'>
            <div className='state-data'>
              Realtime States Data <i className='fal fa-chevron-right'></i>
            </div>
          </Link>
        </div>
        <div className='col-md-4'>
          <Link to='/vaccination-info'>
            <div className='vaccination-info'>
              Vaccination Info <i className='fal fa-chevron-right'></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploreMore;
