import React from 'react'
import ArrowIcon from '../assets/designs/arrow-icon.png'

const WorkCard = ({Industry, Project, ImgSrc, ActionText}) => {
  return (
    <div className='work-card'>
      <div>
        <button className='industry-label'>{Industry || "Industry"}</button>
        <span className='image-demo'>
          <img src={ImgSrc} />
        </span>
      </div>
      <div className='work-info'>
        <p>{Project || "Organization"}</p>
        <button>{ActionText || "View Case Study"}<img src={ArrowIcon} /></button>
      </div>
    </div>
  )
}

export default WorkCard
