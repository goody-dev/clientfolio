import React from 'react'
import ArrowIcon from '../assets/designs/arrow-icon.png'

const WorkCard = ({industry, project, imageSr, detailText, actionText}) => {
  return (
    <div className='work-card'>
      <span className='image-demo'>
        <button className='industry-label'>{industry || "industry"}</button>
        {/* <img src={imageSr} /> */}
      </span>
      <div className='work-info'>
        <p className='org-name'>{project || "Organization"}</p>
        <div className='detail'>
          <p className='detail-text'>{detailText}</p>
          <button className='detail-button'>{ actionText || "View Case Study"}<img src={ArrowIcon} /></button>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
