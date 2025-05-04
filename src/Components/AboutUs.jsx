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
  return (<div>
    <div className="about-banner">
    <img src={aboutus} alt="" />
      <div className="banner-overlay">
        <div className="banner-text">
          <h1>About us</h1>
          <p>Home / About Us</p>
        </div>
      </div>
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
