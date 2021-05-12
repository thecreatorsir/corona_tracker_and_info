import React from "react";

function SocialLink() {
  return (
    <div className='icon-bar'>
      <a
        href='https://www.facebook.com/profile.php?id=100005262840242'
        target='_blank'
        rel='noopener noreferrer'
        className='facebook'
      >
        <i className='fa fa-facebook'></i>
      </a>
      {/* eslint-disable-next-line */}
      <a href='#' className='twitter' rel='noopener noreferrer'>
        <i className='fa fa-twitter'></i>
      </a>
      <a
        href='https://github.com/thecreatorsir'
        target='_blank'
        rel='noopener noreferrer'
        className='github'
      >
        <i className='fa fa-github'></i>
      </a>
      <a
        href='https://www.linkedin.com/in/shubham-sharma-34bbab18b/'
        target='_blank'
        rel='noopener noreferrer'
        className='linkedin'
      >
        <i className='fa fa-linkedin'></i>
      </a>
      <a
        href='https://www.instagram.com/s_h_u_b_h_a_m05/'
        target='_blank'
        rel='noopener noreferrer'
        className='instagram'
      >
        <i className='fa fa-instagram'></i>
      </a>
    </div>
  );
}

export default SocialLink;
