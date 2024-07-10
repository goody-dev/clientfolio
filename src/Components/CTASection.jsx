import React from 'react'
import MailIcon from '../assets/designs/mail-icon.png'
import ResumeIcon from '../assets/designs/resume-icon.png'

import './CTASection.css'

const CTASection = () => {
  return (
    <div id="cta-section" className="section">
      <p className='cta-headline'>Let's work together</p>
      <p className='cta-text'>I am currently open to full-time, contract or freelance role for product designs and no-code development. I would love to hear from you.</p>
      <div id='cta-buttons'>
        <button>
            <img src={MailIcon}/>dipedeji@gmail.com
        </button>
        <button>
            <img src={ResumeIcon} />Cv/Resume
        </button>
      </div>
    </div>
  )
}

export default CTASection
