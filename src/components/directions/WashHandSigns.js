import React from "react";
import soaphand from "../assets/images/soap-hand.png";
import clwater from "../assets/images/cl-water.png";
import wrist from "../assets/images/wrist.png";
import betweenfinger from "../assets/images/between-finger.png";
import palm from "../assets/images/palm-to-palm.png";
import handback from "../assets/images/hand-back.png";
function WashHandSigns() {
  return (
    <>
      <div className='container mb-5'>
        <div className='display-4 text-center mt-3'>
          Follow steps to wash hands
        </div>
        <div className='text-center lead'>
          washing your hands every hour can reduces the risk of corona virus.
        </div>
        <div className='row wrapper'>
          <div className='col-md-1 ml-3 mr-5'>
            <div className='indicator-wrap'>
              <img className='indicator' src={soaphand} alt='soap-hand' />
              <div className='text-center h5  mt-3'>Soap on Hand</div>
            </div>
          </div>
          <div className='col-md-1 ml-3 mr-5'>
            <div className='indicator-wrap'>
              <img className='indicator' src={palm} alt='palm' />
              <div className='text-center h5  mt-3'>Palm to Palm</div>
            </div>
          </div>
          <div className='col-md-1 ml-3 mr-5'>
            <div className='indicator-wrap'>
              <img
                className='indicator'
                src={betweenfinger}
                alt='betweenfingers'
              />
              <div className='text-center h5 mt-4'>Between Fingers</div>
            </div>
          </div>
          <div className='col-md-1 ml-3  mr-5'>
            <div className='indicator-wrap'>
              <img className='indicator' src={handback} alt='handback' />
              <div className='text-center h5  mt-4'>Back to Hands</div>
            </div>
          </div>
          <div className='col-md-1 ml-3 mr-5'>
            <div className='indicator-wrap'>
              <img className='indicator' src={clwater} alt='clwater' />
              <div className='text-center h5  mt-3'>clear with Water</div>
            </div>
          </div>
          <div className='col-md-1 ml-3'>
            <div className='indicator-wrap'>
              <img className='indicator' src={wrist} alt='wrist' />
              <div className='text-center h5  mt-3'>Focus on Wrist</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WashHandSigns;
