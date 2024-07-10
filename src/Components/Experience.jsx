import React from 'react'
import './Experience.css'

const Experience = () => {
const experiences = [
  {
    role: "Lead designer & IT support staff",
    jobType: "fulltime",
    company: "Venite University Iloro Ekiti",
    location: "Onsite, Nigeria",
    timeRange: "Nov, 2023 - Present",
    achievements: [
      "Created visually engaging designs for the institution's social media platforms, ensuring brand consistency and capturing the attention of the target audience which led to a growth of their accounts by 100%.",
      " Worked with network and devops engineers in setting up the biggest Computer based test (CBT) centre in Ekiti state."
    ]
  },
  {
    role: "Lead designer & IT support staff",
    jobType: "fulltime",
    company: "Venite University Iloro Ekiti",
    location: "Onsite, Nigeria",
    timeRange: "Nov, 2023 - Present",
    achievements: [
      "Created visually engaging designs for the institution's social media platforms, ensuring brand consistency and capturing the attention of the target audience which led to a growth of their accounts by 100%.",
      " Worked with network and devops engineers in setting up the biggest Computer based test (CBT) centre in Ekiti state."
    ]
  },
  {
    role: "Lead designer & IT support staff",
    jobType: "fulltime",
    company: "Venite University Iloro Ekiti",
    location: "Onsite, Nigeria",
    timeframe: "Nov, 2023 - Present",
    achievements: [
      "Created visually engaging designs for the institution's social media platforms, ensuring brand consistency and capturing the attention of the target audience which led to a growth of their accounts by 100%.",
      " Worked with network and devops engineers in setting up the biggest Computer based test (CBT) centre in Ekiti state."
    ]
  },
  {
    role: "Lead designer & IT support staff",
    jobType: "fulltime",
    company: "Venite University Iloro Ekiti",
    location: "Onsite, Nigeria",
    timeframe: "Nov, 2023 - Present",
    achievements: [
      "Created visually engaging designs for the institution's social media platforms, ensuring brand consistency and capturing the attention of the target audience which led to a growth of their accounts by 100%.",
      " Worked with network and devops engineers in setting up the biggest Computer based test (CBT) centre in Ekiti state."
    ]
  },
  {
    role: "Lead designer & IT support staff",
    jobType: "fulltime",
    company: "Venite University Iloro Ekiti",
    location: "Onsite, Nigeria",
    timeframe: "Nov, 2023 - Present",
    achievements: [
      "Created visually engaging designs for the institution's social media platforms, ensuring brand consistency and capturing the attention of the target audience which led to a growth of their accounts by 100%.",
      " Worked with network and devops engineers in setting up the biggest Computer based test (CBT) centre in Ekiti state."
    ]
  },
  {
    role: "Lead designer & IT support staff",
    jobType: "fulltime",
    company: "Venite University Iloro Ekiti",
    location: "Onsite, Nigeria",
    timeframe: "Nov, 2023 - Present",
    achievements: [
      "Created visually engaging designs for the institution's social media platforms, ensuring brand consistency and capturing the attention of the target audience which led to a growth of their accounts by 100%.",
      " Worked with network and devops engineers in setting up the biggest Computer based test (CBT) centre in Ekiti state."
    ]
  }
]

  return (
    <div id='experience' className='section'>
      <div className='section-header'>
        <p className='section-header-text'>Experience</p>
        <hr className='section-header-text header-div'/>
      </div>
      <div id='experiences'>
        {experiences.map((experience, id)=>
          <div key={id} className='experience'>
            <div className='job-detail'>
              <div>
                <p>{experience.role}<br/>({experience.jobType})</p>
                <p>{experience.company}</p>
              </div>
              <div>
                <p>{experience.location}</p>
                <p>{experience.timeframe}</p>
              </div>
            </div>
            <div className='job-achievements'>
              {experience.achievements.map((achievement, id) =>
                <p key={id}>{achievement}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience
