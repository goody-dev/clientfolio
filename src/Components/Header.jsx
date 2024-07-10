import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import Logo from '../assets/designs/Logo.svg'
import DiagonalArrowUpIcon from '../assets/designs/diagonal-arrow-up-icon.png'
import MailIcon from '../assets/designs/mail-icon.png'


const Header = () => {

  return (
    <header id="header" className="section">
      <img src={Logo} />
      <nav>
        <ul id="nav-bar">
          <li className='navigator'>
            <hr id='work-page-indicator' className="page-indicator"/>
            <Link to="/"><button className='work-button'>Work</button></Link>
          </li>
          <li className='navigator'>
            <hr id='abtme-page-indicator' className="page-indicator"/>
            <Link to="/about" ><button className='abtme-button'>About Me</button></Link>
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
