import React from 'react'
import './Header.css'

//import Logo from '../assets/designs/logo.png'
import DiagonalArrowUpIcon from '../assets/designs/diagonal-arrow-up-icon.png'
import MailIcon from '../assets/designs/mail-icon.png'


const Header = () => {

  return (
    <div id="header" className="section">
      {/* <img src={Logo} /> */}
      <p>Heritage Isaac</p>
      <div id="nav-bar">
        <div className='navigator'>
          <hr id='work-page-indicator' className="page-indicator"/>
          <button className='work-button'><a>Work</a></button>
        </div>
        <div className='navigator'>
          <hr id='abtme-page-indicator' className="page-indicator"/>
          <button className='abtme-button'><a>About Me</a></button>
        </div>
      </div>
      <div id="header-cta">
        <button className="resume-button">Resume<img src={DiagonalArrowUpIcon} /></button>
        <button className="lets-talk"><img src={MailIcon} />Let's Talk</button>
      </div>
      <p className="hamburger">Menu</p>
    </div>
  )
}

export default Header
