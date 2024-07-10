import React from 'react'
import ArrowIcon from '../assets/designs/arrow-icon.png'
import workImage from '../assets/designs/work-img.png';

const WorkCard = ({industry, project, imageSr, detailText, actionText}) => {
  return (
    <div className='work-card'>
      <div className='image-demo'>
        <button className='industry-label'>{industry || "industry"}</button>
        <img src={workImage} /> 
      </div>
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
