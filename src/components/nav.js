import React from "react";
import img from "./images/corona.png";
import Timer from "./timer";
function nav() {
  return (
    <React.Fragment>
      <nav className='navbar nav sticky-top'>
        <span className='mb-0 text-white pic'>
          <img
            src={img}
            className='d-inline-block align-top'
            alt='logo'
            height={50}
            width={50}
          />
          <h3 className='title'>COVID-19 Live Update</h3>
        </span>
        <Timer />
      </nav>
    </React.Fragment>
  );
}

export default nav;
