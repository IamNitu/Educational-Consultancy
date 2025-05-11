import React from 'react';
import SuccessStory from './SuccessStory';
import Footer from './Footer';
import aboutus from '/aboutus.webp';

function Services() {
  return (
   <>
    <div className='our-service'>
       <div className="about-banner">
          <img src={aboutus} alt="" />
            <div className="banner-overlay">
              <div className="banner-text">
                <h1>Our Services</h1>
                <p>Home / Services</p>
              </div>
            </div>
          </div>
           
         
          <div className="service-triangle">
      <div className="service-triangle-orange"></div>
    </div>
    <div className="service-triangle-right">
    <div className="service-triangle-blue"></div>
    </div>


      <SuccessStory/>
      <Footer/>
    </div>
   </>
  )
}

export default Services
