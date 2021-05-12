import React from "react";

function Footer() {
  return (
    <>
      <footer className='page-footer font-small teal pt-4 footer'>
        <div className='container-fluid text-center text-md-left'>
          <div className='row'>
            <div className='col-md-6 col-sm-6 mt-md-0 mt-3'>
              <address className='text-white'>
                <h2 className='text-white'>Contact ME!</h2>
                Developed by:
                <a
                  href='https://www.linkedin.com/in/shubham-sharma-34bbab18b/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Shubham Sharma
                </a>
                .<br />
                Reach me at:
                <br />
                Thapar University
                <br />
                pin 147001, Patiala
                <br />
                India
              </address>
            </div>

            <hr className='clearfix w-100 d-md-none pb-3' />

            <div className='col-md-6 col-sm-6 mb-md-0 mb-3'>
              <h2 className='text-white'>Quick Links!</h2>

              <a href='.nav'>To Top</a>
              <br />
              <a href='https://www.youtube.com/channel/UCHtIkfi9UmBlAz70hxbRBkg?view_as=subscriber'>
                My Youtube Channel
              </a>
            </div>
          </div>
        </div>

        <div className='footer-copyright text-center py-3 cpright text-white'>
          © 2020 Copyright:
          <a
            href='https://github.com/thecreatorsir'
            target='_blank'
            rel='noopener noreferrer'
          >
            thecreatorsir
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
