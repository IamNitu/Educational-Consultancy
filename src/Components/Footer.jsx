import React from 'react';
import { Copyright ,MoveRight,MapPin,Mail,Phone,Facebook,Instagram,Twitter} from 'lucide-react';
import navimg from '/navimg.png';

function Footer() {
  return (
   <>
    <div className='footer'>
    <div className='footer-section'>
        <div className='footer-about'>
        <div className='footer-about-main'>
            <img src={navimg} alt='' />
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut libero, commodi eius vel, perferendis corrupti nostrum quod incidunt natus iure cupiditate dicta aut, repellendus laborum similique! Earum maiores ratione quidem. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat officia quisquam ex rerum alias laudantium.</p>
            </div>
                <div className='footer-section-btn'><button id='footer-btn'>Read More <MoveRight id='footer-about-icon'/></button></div>
                </div>

        <div className='footer-links'>
            <h3>Important Links</h3>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
                <li>Preparation Classes</li>
                <li>Visa Granted</li>
                <li>Gallery</li>
                <li>Blog</li>
            </ul>
        </div>

        <div className='footer-study'>
            <h3>Study Abroad</h3>
            <p>Malta</p>
            <p>UAE</p>
            <p>UK</p>
            <p>Australia</p>
        </div>

        <div className='footer-contact'>
            <div className='footer-contact-us'>
            <h3>Contact Us</h3>
                <p><MapPin id='footer-contact-us-icon'/> MaitiDevi, Setopool, Kathmandu, Nepal</p>
                <p> <Mail id='footer-contact-us-icon'/>Info@gmail.com</p>
                <p><Phone id='footer-contact-us-icon'/>+977-9802374773<br/>
               +977-9802374774<br/>
               +977-9802374775</p>
            </div>

            <div className='footer-social'>
            <h3>Social Links</h3>
           <div className='footer-social-icon'> <Facebook id='footer-social-icon'/>
            <Instagram id='footer-social-icon'/>
            <Twitter id='footer-social-icon'/></div>

            </div>
        </div>
    </div>

    <div className='copyright'>
        <p> <Copyright id='copyright-icon'/> 2023, Macrohub Educational Consultancy. All Rights Reserved.</p>
    </div>

    </div>
   </>
  )
}

export default Footer