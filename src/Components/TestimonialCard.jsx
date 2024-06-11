import React from 'react'
import './Testimonials.css'

const TestimonialCard = ({testimony, witnessAvatar, witnessName, witnessTitle}) => {
  return (
    <div>
      <p>"</p>
      <p>{testimony}</p>
      <div className='profile'>
        <img src={witnessAvatar}/>
        <div>
          <p>{witnessName}</p>
          <p>{witnessTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard