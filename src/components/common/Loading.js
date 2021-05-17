import React from "react";
import spinner from "../assets/images/spinner.gif";
function Loading() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 loading'>
          <img src={spinner} alt='Loading' />
        </div>
      </div>
    </div>
  );
}

export default Loading;
