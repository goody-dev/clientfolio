import React from 'react'
import './Hero.css'

//import ProductVector from '../assets/designs/product-vector.png'
import HeritagesAvatar from '../assets/designs/heritage.png'
//import DesignerVector from '../assets/designs/designer-vector.png'
import OpenToWorkVector from '../assets/designs/open-to-work.png'
import WirelessMouseIcon from '../assets/designs/wireless-mouse-icon.png'
import MailIcon from '../assets/designs/mail-icon.png'


const Hero = () => {
  return (
    <div id="hero" className='section'>
        <div id="product-frame">
          <p className='products-text'>PRODUCT</p>
          <img className='heritages-icon' src={HeritagesAvatar} />
        </div>
        <div id="designer-frame">
          {/* <img className="designer-vector" src={DesignerVector} /> */}
          <p className='designers-text'>DESIGNER</p>
          <img className="otw-vector" src={OpenToWorkVector} />
        </div>
      <div id="hero-caption">
        <p className="hero-text">Hello!-I'm Heritage Isaac, a Product designer<br/> and a no-code developer. I also dabble a little<br/> into branding. I help start-ups make an impact<br/> by solving real life problems and deliver unique,<br/> empathic experiences.</p>
        <div className="hero-cta">
          <div className='cta'>
            <p>Reach out at</p><button className='button'><img src={MailIcon} />dipedeji@gmail.com</button>
          </div>
          <a className="nav-link" href='#work' aria-label='Scroll down'><img id="nav-mouse" src={WirelessMouseIcon} /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
