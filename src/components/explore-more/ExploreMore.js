import React from "react";
import { Link } from "react-router-dom";
function ExploreMore() {
  return (
    <div className='container'>
      <div className='row explore-more-container'>
        <div className='col-md-4'>
          <div className='more-info'>
            <Link to='/more-info'>
              More Info <i className='fal fa-chevron-right'></i>
            </Link>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='state-data'>
            <Link to='/state-info'>
              Realtime States Data <i className='fal fa-chevron-right'></i>
            </Link>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='vaccination-info'>
            <Link to='/vaccination-info'>
              Vaccination Info <i className='fal fa-chevron-right'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreMore;
