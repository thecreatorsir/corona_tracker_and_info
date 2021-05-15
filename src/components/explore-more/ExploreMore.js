import React from "react";

function ExploreMore() {
  return (
    <div className='container'>
      <div className='row explore-more-container'>
        <div className='col-md-4'>
          <div className='more-info'>
            <a href='#'>
              More Info <i class='fal fa-chevron-right'></i>
            </a>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='state-data'>
            <a href='#'>
              States Data <i class='fal fa-chevron-right'></i>
            </a>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='vaccination-info'>
            <a href='#'>
              Vaccination Info <i class='fal fa-chevron-right'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreMore;
