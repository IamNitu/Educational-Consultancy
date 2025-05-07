import React from 'react';
import aboutus from '/aboutus.webp';
import {Phone,Mail,MapPin} from 'lucide-react';
import ContactUsForm from './ContsctUsForm';
import Footer from './Footer';
function ContactUs() {
  return (
<>
<div className='contactus'>
          <div className="about-banner">
          <img src={aboutus} alt="" />
            <div className="banner-overlay">
              <div className="banner-text">
                <h1>Contact Us</h1>
                <p>Home / Contact Us</p>
              </div>
            </div>
          </div>

          <div className="service-triangle">
      <div className="service-triangle-orange"></div>
    </div>
    <div className="service-triangle-right">
    <div className="service-triangle-blue"></div>
    </div>



    <div className='contact-content'>
    <p>Contact Us</p>
    <h1>Happy Serving You</h1>

    <div className='contact-section'>
      <div className='contact-info'>
         <div className='contact-us'>
                    <h1>Contact Details</h1>
                        <p><MapPin id='contact-us-icon'/> MaitiDevi, Setopool, Kathmandu, Nepal</p>
                        <p> <Mail id='contact-us-icon'/>Info@gmail.com</p>
                        <p><Phone id='contact-us-icon'/>+977-9802374773<br/>
                       +977-9802374774<br/>
                       +977-9802374775</p>
                    </div>
      </div>

      <div className='contact-map'>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776845179!2d85.28493294943873!3d27.709030241905573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1745170255555!5m2!1sen!2snp"  className='iframe-map'/>
      </div>

    </div>
    </div>

<ContactUsForm/>
<Footer/>
</div>
</>
  )
}

export default ContactUs