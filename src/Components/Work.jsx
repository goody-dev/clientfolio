import React from 'react'
import WorkCard from './WorkCard'
import './Work.css'

const Work = () => {
  const works = [
    {
      industry: "Logistics",
      project: "PYKUP",
      imgSrc: "../assests/designs/Work-1.png"
    },
    {
      industry: "Fintech",
      project: "GLOBPAY",
      imgSrc: "../assests/designs/Work-1.png"
    },
    {
      industry: "Banking",
      project: "ABULESORO",
      imgSrc: "../assests/designs/Work-1.png"
    },
    {
      industry: "Foodtech",
      project: "MR BIGGS",
      imgSrc: "../assests/designs/Work-1.png"
    },
    {
      industry: "Fintech",
      project: "SMART POCKET",
      imgSrc: "../assests/designs/Work-1.png"
    },
    {
      industry: "Travel",
      project: "XPLORE 9JA",
      imgSrc: "../assests/designs/Work-1.png"
    },
  ]

  const actionText = "View Case Study"

  return (
    <div id='work' className='section'>
      <div className='section-header'>
        <p className='section-header-text'>MY WORK</p>
        <hr className='section-header-text header-div'></hr>
      </div>
      <div className='works'>
        {works.map((work, idx)=> <WorkCard key={idx} Industry={work.industry} Project={work.project} ImageSrc={work.imgSrc} actionText={actionText} />)}
      </div>
    </div>
  )
}

export default Work
