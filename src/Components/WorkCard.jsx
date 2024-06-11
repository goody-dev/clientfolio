import React from 'react'
import ArrowIcon from '../assets/designs/arrow-icon.png'

const WorkCard = ({Industry, Project, ImgSrc, ActionText}) => {
  return (
    <div className='work-card'>
      <div>
        <button>{Industry || "Industry"}</button>
        <div>
          <img src={ImgSrc} />
        </div>
      </div>
      <div>
        <p>{Project || "Organization"}</p>
        <button>{ActionText || "View Case Study"}<img src={ArrowIcon} /></button>
      </div>
    </div>
  )
}

export default WorkCard
