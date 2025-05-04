import React from 'react';
import SuccessStory from './SuccessStory';
import Footer from './Footer';
import aboutus from '/aboutus.webp';

function Services() {
  return (
   <>
    <div>
       <div className="about-banner">
          <img src={aboutus} alt="" />
            <div className="banner-overlay">
              <div className="banner-text">
                <h1>Our Services</h1>
                <p>Home / Services</p>
              </div>
            </div>
          </div>

      <SuccessStory/>
      <Footer/>
    </div>
   </>
  )
}

export default Services
