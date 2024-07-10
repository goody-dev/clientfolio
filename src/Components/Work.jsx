import React from 'react'
import WorkCard from './WorkCard'
import './Work.css'

const Work = () => {
  const works = [
    {
      industry: "NGO",
      project: "FLECT",
      imgSrc: "../assets/designs/work-img.png",
      detailText: "Flect is a company that provides solutions to the writing and financial needs of people by the help of a SAAS web app"
    },
    {
      industry: "NGO",
      project: "INSPIRE STEM GIRLS",
      imgSrc: "../assets/designs/work-img.png",
      detailText: "Inspire STEM Girls' mission is to cultivate an empowering environment that encourages young girls to explore and excel in the field"
    },
    {
      industry: "Logistics",
      project: "PYKUP",
      imgSrc: "../assets/designs/work-img.png",
      detailText: "We connect drivers/drivers looking to make extra cash with individuals looking to send packages to families, friends and business across Nigeria"
    },
    {
      industry: "Fintech",
      project: "GLOBPAY",
      imgSrc: "../assets/designs/work-img.png",
      detailText: "Transact seemlessly across the border with your mobile wallet in a preferred currency using Globpay app"
    }
  ]

  const actionText = "View Case Study"

  return (
    <div id='work' className='section'>
      <div className='section-header'>
        <p className='section-header-text'>MY WORK</p>
        <hr className='section-header-text header-div'></hr>
      </div>
      <div className='works'>
        {works.map((work, idx)=> <WorkCard key={idx} industry={work.industry} project={work.project} imageSrc={work.imgSrc} detailText={work.detailText} actionText={actionText} />)}
      </div>
    </div>
  )
}

export default Work
