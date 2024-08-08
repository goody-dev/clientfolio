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
            <hr ref={workIndicator}  id='work-page-indicator' className={url.pathname === "/work"? "page-indicator":url.pathname === "/about"? "page-indicator indicator-inactive": "page-indicator"}/>
            <NavLink to="/work" ><button id='work-button' className={url.pathname === "/work"? "nav_button":url.pathname === "/about"? "button-inactive": ""}>Work</button></NavLink>
          </li>
          <li className='navigator'>
            <hr ref={aboutIndicator} id='abtme-page-indicator' className={url.pathname === "/about"? "page-indicator": "page-indicator indicator-inactive"}/>
            <NavLink to="/about" ><button id='abtme-button' className={url.pathname === "/about"? "nav_button": "button-inactive"}>About Me</button></NavLink>
          </li>
        </ul>
      </nav>
      <div id="header-cta">
        <button className="resume-button">Resume<img src={DiagonalArrowUpIcon} /></button>
        <button className="lets-talk nav_button"><img src={MailIcon} />Let's Talk</button>
      </div>
      <div className='hamburger-outline'>
        <button className="hamburger nav_button">Menu</button>
      </div>
    </header>
  )
}

export default Header
