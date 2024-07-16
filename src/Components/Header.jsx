import React, { useRef } from 'react'
import './Header.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

import Logo from '../assets/designs/Logo.svg'
import DiagonalArrowUpIcon from '../assets/designs/diagonal-arrow-up-icon.png'
import MailIcon from '../assets/designs/mail-icon.png'


const Header = () => {
  const workRef = useRef();
  const workIndicator = useRef();
  const aboutIndicator = useRef();
  const aboutRef = useRef();
  const url = useLocation();
  // alert(url.pathname);


  return (
    <header id="header" className="section">
      <img src={Logo} />
      <nav>
        <ul id="nav-bar">
          <li className='navigator'>
            <hr ref={workIndicator}  id='work-page-indicator' className={url.pathname === "/work" || "/"? "page-indicator": "page-indicator indicator-inactive"}/>
            <NavLink to="/" ><button id='work-button' className={url.pathname === "/work" || "/"? "": "button-inactive"}>Work</button></NavLink>
          </li>
          <li className='navigator'>
            <hr ref={aboutIndicator} id='abtme-page-indicator' className={url.pathname === "/about"? "page-indicator": "page-indicator indicator-inactive"}/>
            <NavLink to="/about" ><button id='abtme-button' className={url.pathname === "/about"? "": "button-inactive"}>About Me</button></NavLink>
          </li>
        </ul>
      </nav>
      <div id="header-cta">
        <button className="resume-button">Resume<img src={DiagonalArrowUpIcon} /></button>
        <button className="lets-talk"><img src={MailIcon} />Let's Talk</button>
      </div>
      <p className="hamburger">Menu</p>
    </header>
  )
}

export default Header
