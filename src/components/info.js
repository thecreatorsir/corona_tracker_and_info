import React from "react";
import Doctor from "./images/female_doctor.png";

function info() {
  return (
    <>
      <div className='jumbotron'>
        <h1 className='text-muted ml-5'>What is CORONA virus</h1>
        <div className='row'>
          <div className='col-md-8 '>
            <p className='info1'>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus. Most people infected with the
              COVID-19 virus will experience mild to moderate respiratory
              illness and recover without requiring special treatment. Older
              people, and those with underlying medical problems like
              cardiovascular disease, diabetes, chronic respiratory disease, and
              cancer are more likely to develop serious illness. The best way to
              prevent and slow down transmission is be well informed about the
              COVID-19 virus, the disease it causes and how it spreads. Protect
              yourself and others from infection by washing your hands or using
              an alcohol based rub frequently and not touching your face. The
              COVID-19 virus spreads primarily through droplets of saliva or
              discharge from the nose when an infected person coughs or sneezes,
              so it’s important that you also practice respiratory etiquette
              (for example, by coughing into a flexed elbow). At this time,
              there are no specific vaccines or treatments for COVID-19.
              However, there are many ongoing clinical trials evaluating
              potential treatments. WHO will continue to provide updated
              information as soon as clinical findings become available.
            </p>
          </div>

          <div className='col-md-4'>
            <img src={Doctor} alt='doctor' className='doctor-icon' />
          </div>
        </div>
      </div>

      <div className='bg-image'>
        <div className='two-jumbo row'>
          <div className='col-md-6'>
            <div className='jumbotron rounded-0 mt-5'>
              <h1 className='display-4'>
                Is there more than one strain of SARS-CoV-2?
              </h1>
              <p className='lead'>
                It’s normal for a virus to change, or mutate, as it infects
                people.
              </p>
              <hr className='my-4  display-5' />
              <p>
                A Chinese study of 103 COVID-19 cases suggests the virus that
                causes it has done just that.
              </p>

              <div className='panel-group'>
                <div className='panel panel-default'>
                  <div className='panel-heading'>
                    <h4 className='panel-title'>
                      <a
                        className='btn btn-primary btn-lg lead'
                        data-toggle='collapse'
                        href='#collapse1'
                        role='button'
                      >
                        Learn more
                      </a>
                    </h4>
                  </div>
                  <div id='collapse1' className='panel-collapse collapse'>
                    <p>
                      They found two strains, which they named L and S. The S
                      type is older, but the L type was more common in early
                      stages of the outbreak. They think one may cause more
                      cases of the disease than the other, but they’re still
                      working on what it all means.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='jumbotron rounded-0 mt-5'>
              <h1 className='display-4'>How long will the coronavirus last?</h1>
              <p className='lead'>
                It’s too soon to tell how long the pandemic will continue.
              </p>
              <hr className='my-4' />
              <p>
                It depends on many things, including researchers’ work to learn
                more about the virus, their search for a treatment and a
                vaccine, and the public’s efforts to slow the spread.
              </p>

              <div className='panel-group'>
                <div className='panel panel-default'>
                  <div className='panel-heading'>
                    <h4 className='panel-title'>
                      <a
                        className='btn btn-primary btn-lg lead'
                        data-toggle='collapse'
                        href='#collapse2'
                        role='button'
                      >
                        Learn more
                      </a>
                    </h4>
                  </div>
                  <div id='collapse2' className='panel-collapse collapse'>
                    <p>
                      More than 100 vaccine candidates are in various stages of
                      development and testing. This process usually takes years.
                      Researchers are speeding it up as much as they can, but it
                      still might take 12 to 18 months to find a vaccine that
                      works and is safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default info;
