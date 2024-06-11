import React from 'react'

import CircledArrowLeft from '../assets/designs/circled-arrow-left-icon.png'
import CircledArrowRight from '../assets/designs/circled-arrow-right-icon.png'
import ThreeDotsIcon from '../assets/designs/three-dots-icon.png'
import TestimonialCard from './TestimonialCard'

import './Testimonials.css'

const Testimonials = () => {

  const testimonials = [
    {
      testimony: "Heritage thrived in my UI design mentorship. His dedication, talent, and passion for user-centric design are evident in his diverse portfolio. He has a bright future and I highly recommend him.",
      witnessAvatar: "/davio-white-avatar.png",
      witnessName: "Davio White",
      witnessTitle: "Software Designer, Monafa",
    },
    {
      testimony: "Heritage's innovative solutions and commitment to user experience on our SaaS product was top-notch. His work on Payrev was a game-changer. Highly recommend!",
      witnessAvatar: "/samuel-adedeji-avatar.png",
      witnessName: "Samuel Adedeji",
      witnessTitle: "Team Lead Open Banking, Polaris",
    }
  ]

  return (
    <div id="testimonials" className='section'>
      <p className="section-header-text">Testimonial</p>
      <hr className="section-header-text header-div"></hr>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, idx)=> <TestimonialCard key={idx} testimony={testimonial.testimony} witnessAvatar={testimonial.witnessAvatar} witnessName={testimonial.witnessName} witnessTitle={testimonial.witnessTitle} />)}
        <TestimonialCard />
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
