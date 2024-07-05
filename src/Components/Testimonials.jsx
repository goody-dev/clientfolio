import React from 'react'

import CircledArrowLeft from '../assets/designs/circled-arrow-left-icon.png'
import CircledArrowRight from '../assets/designs/circled-arrow-right-icon.png'
import ThreeDotsIcon from '../assets/designs/three-dots-icon.png'
import TestimonialCard from './TestimonialCard'

import './Testimonials.css'
import '../App.css'

const Testimonials = () => {

  const testimonials = [
    {
      testimony: "Heritage thrived in my UI design mentorship. His dedication, talent, and passion for user-centric design are evident in his diverse portfolio. He has a bright future and I highly recommend him.",
      witnessAvatar: "/davio-white-avatar.png",
      witnessName: "Davio White",
      witnessTitle: "Software Designer, Monafa",
      className: "visible-card1"
    },
    {
      testimony: "Heritage's innovative solutions and commitment to user experience on our SaaS product was top-notch. His work on Payrev was a game-changer. Highly recommend!",
      witnessAvatar: "/samuel-adedeji-avatar.png",
      witnessName: "Samuel Adedeji",
      witnessTitle: "Team Lead Open Banking, Polaris",
      className: "visible-card2"
    }
  ]

  return (
    <div id="testimonials" className='section'>
      <div className="section-header">
        <p className="section-header-text">TESTIMONIAL</p>
        <hr className="section-header-text header-div"></hr>
      </div>
      <div className="testimonial-cards">
         {testimonials.map((testimonial, idx)=> <TestimonialCard key={idx} className={testimonial.className} testimony={testimonial.testimony} witnessAvatar={testimonial.witnessAvatar} witnessName={testimonial.witnessName} witnessTitle={testimonial.witnessTitle} />)}
      </div>
      <div className="testimonial-slider">
        <div>
          <img src={ThreeDotsIcon} />
        </div>
        <div className='slider-controls'>
          <button className='arrow-buttons'><img src={CircledArrowLeft} /></button>
          <button className='arrow-buttons'><img src={CircledArrowRight} /></button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
