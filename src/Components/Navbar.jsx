import React , { useState } from 'react';
import '../Navbar.css';
import {MapPin,Mail,Phone, Menu, X} from 'lucide-react'
import navimg from '/navimg.png'
import { NavLink } from 'react-router-dom';


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>

<div className='main-nav'>
<div className='child-div1'>
<img src={navimg} alt='' className='navimg' />
</div>

<div className='child-div2'>
  <header id='header'>
    <div className='header-info'>
    <p><MapPin id='nav-icon'/> Maitidevi,Kathmandu</p>
    <p><Mail id='nav-icon'/> comapany@info.com</p>
    <p><Phone id='nav-icon'/> +977-123456789</p>
    </div>
        </header>
 
  <div className='grandchild-div2'>

  <div className='hamburger' onClick={toggleMenu}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <div className={`navlink ${menuOpen ? 'show' : ''}`}>
            <NavLink to="/" id='navlink'>Home</NavLink>
            <NavLink to="/aboutus" id='navlink'>About Us</NavLink>
            <NavLink to="/services" id='navlink'>Services</NavLink>
            <NavLink to="/preparationclass" id='navlink'>Preparation Class</NavLink>
            <NavLink to="/blog" id='navlink'>Blog</NavLink>
            <NavLink to="/successstories" id='navlink'>Gallery</NavLink>
            <NavLink to="/contactus" id='navlink'>Contact Us</NavLink>
            </div>
  </div>
</div>
</div>
    </>
  )
}

export default Navbar