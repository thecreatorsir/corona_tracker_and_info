import React from "react";
function Precautions() {
  return (
    <div>
      <div className='bg-image2'>
        <div className='conti'>
          <div className='card prec1 bg-danger text-white rounded-0 bg-transparent border-white'>
            <div className='card-header border-white h4'>Thinks to Do</div>
            <div className='card-body'>
              <div className='card-text h6'>
                <li>
                  <small>Wash Your Hand For 20 Sec</small>
                </li>
                <hr className='bg-white' />
                <li>
                  <small>Practice social distancing</small>
                </li>
                <hr className='bg-white' />

                <li>
                  <small>Avoid Contact With Animals</small>
                </li>
                <hr className='bg-white' />
                <li>
                  <small>Always Cover Your Sneeze</small>
                </li>
              </div>
            </div>
          </div>

          <div className='card prec2 rounded-0 bg-danger bg-transparent border-white text-white'>
            <div className='card-header border-white h4'>Thinks Not to Do</div>
            <div className='card-body'>
              <div className='card-text h6'>
                <li>
                  <small>Avoid Crowded Places</small>
                </li>
                <hr className='bg-white' />
                <li>
                  <small>Don't Handshake</small>
                </li>
                <hr className='bg-white' />
                <li>
                  <small>Don't Touch Your Face</small>
                </li>
                <hr className='bg-white' />
                <li>
                  <small>Avoid Traveling</small>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Precautions;
