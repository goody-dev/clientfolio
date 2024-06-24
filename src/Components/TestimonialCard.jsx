import React from 'react'
import './Testimonials.css'

const TestimonialCard = ({className, testimony, witnessAvatar, witnessName, witnessTitle}) => {
  return (
    <div className={'testimonial-card' + ' ' + className}>
      <p className='quote'>"</p>
      <p>{testimony}</p>
      <div className='profile'>
        <img src={witnessAvatar}/>
        <div>
          <p className='name'>{witnessName}</p>
          <p className='title'>{witnessTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
