import React from 'react'
import './Header.css'

import Logo from '../assets/designs/logo.png'
import DiagonalArrowUpIcon from '../assets/designs/diagonal-arrow-up-icon.png'
import MailIcon from '../assets/designs/mail-icon.png'


const Header = () => {

  return (
    <div id="header" className="section">
      <img src={Logo} />
      <div id="nav-bar">
        <button className='work-button'><a>Work</a></button>
        <button className='abtme-button'><a>About Me</a></button>
      </div>
      <div id="header-cta">
        <button className="resume">Resume<img src={DiagonalArrowUpIcon} /></button>
        <button className="lets-talk"><img src={MailIcon} />Let's Talk</button>
      </div>
    </div>
  )
}

export default Header
