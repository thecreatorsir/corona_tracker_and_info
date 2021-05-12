import React from "react";
import img from "../assets/images/corona.png";
import Timer from "../utils/Timer";
function Nav() {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-lg fixed-top'>
        <img src={img} alt='logo' height={50} width={50} />
        <h3 className='title'>COVID-19 Live Status</h3>
        <Timer />
      </nav>
    </React.Fragment>
  );
}

export default Nav;
