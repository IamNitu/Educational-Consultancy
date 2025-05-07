import React from "react";
import aboutus from '/aboutus.webp';
import Achievement from './Achievement.jsx';
import WorkingProcess from './WorkingProcess.jsx';
import AffiliatedUni from './AffiliatedUni.jsx';
import Footer from './Footer.jsx';

import AboutPagePara from './AboutPagePara.jsx';
import AboutMessage from "./AboutMessage.jsx";
import AboutMembers from "./AboutMembers.jsx";

const AboutUsBanner = () => {
  return (<div className="about-banner-wrapper">
    <div className="about-banner">
    <img src={aboutus} alt="" />
   
      <div className="banner-overlay">
      
        <div className="banner-text">
          <h1>About us</h1>
          <p>Home / About Us</p>
        </div>
      </div>
    </div>
    <div className="banner-triangle">
      <div className="banner-triangle-orange"></div>
    </div>
    <div className="banner-triangle-right">
    <div className="banner-triangle-blue"></div>
    </div>
   

    <AboutPagePara/>
    <AboutMessage/>
    <AboutMembers/>
    <Achievement/>
    <WorkingProcess/>
    <AffiliatedUni/>
    <Footer/>
    </div>
  );
};

export default AboutUsBanner;
