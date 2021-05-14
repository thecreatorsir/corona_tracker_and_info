import React from "react";
import soaphand from "../assets/images/soap-hand.png";
import clwater from "../assets/images/cl-water.png";
import wrist from "../assets/images/wrist.png";
import betweenfinger from "../assets/images/between-finger.png";
import palm from "../assets/images/palm-to-palm.png";
import handback from "../assets/images/hand-back.png";
function WashHandSigns() {
  return (
    <div className='container mb-5 indicator-container'>
      <div className='display-4 text-center mt-3'>
        Follow steps to wash hands
      </div>
      <div className='text-center lead'>
        washing your hands every hour can reduces the risk of corona virus.
      </div>
      <div className='row wash-hands'>
        <div className='col-md-2'>
          <div className='text-center mt-3'>
            <img className='indicator' src={soaphand} alt='soap-hand' />
            <h5 className='mt-2'>Soap on Hand</h5>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='text-center mt-3'>
            <img className='indicator' src={palm} alt='palm' />
            <h5 className='mt-2'>Palm to Palm</h5>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='text-center mt-3'>
            <img
              className='indicator'
              src={betweenfinger}
              alt='betweenfingers'
            />
            <h5 className='mt-2'>Between Fingers</h5>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='text-center mt-3'>
            <img className='indicator' src={handback} alt='handback' />
            <h5 className='mt-2'>Back To Hands</h5>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='text-center mt-3'>
            <img className='indicator' src={clwater} alt='clwater' />
            <h5 className='mt-2'>Clear with water</h5>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='text-center mt-3'>
            <img className='indicator' src={wrist} alt='wrist' />
            <h5 className='mt-2'>Focus On Wrist</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WashHandSigns;
