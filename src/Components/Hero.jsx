import React from 'react'
import './Hero.css'

import ProductVector from '../assets/designs/product-vector.png'
import HeritagesAvatar from '../assets/designs/heritage.png'
import DesignerVector from '../assets/designs/designer-vector.png'
import OpenToWorkVector from '../assets/designs/open-to-work.png'
import WirelessMouseIcon from '../assets/designs/wireless-mouse-icon.png'
import MailIcon from '../assets/designs/mail-icon.png'


const Hero = () => {
  return (
    <div id="hero" className='section'>
        <div id="product-frame">
          <img className="product-vector" src={ProductVector} />
          <img className='heritages-icon' src={HeritagesAvatar} />
        </div>
        <div id="designer-frame">
          <img className="designer-vector" src={DesignerVector} />
          <img className="otw-vector" src={OpenToWorkVector} />
        </div>
      <div id="hero-caption">
        <p className="hero-text">Hello!-I'm Heritage Isaac, a Product designer and a no-code developer. I also dabble a little into branding. I help start-ups make an impact by solving real life problems and deliver unique, empathic experiences.</p>
        <div className="hero-cta">
          <p>Reach out at</p><button className='button'><img src={MailIcon} />dipedeji@gmail.com</button>
        </div>
      </div>
      <img id="nav-mouse" src={WirelessMouseIcon} />
    </div>
  )
}

export default Hero
