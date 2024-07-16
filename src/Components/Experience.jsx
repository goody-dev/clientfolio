import React from 'react'
import './Experience.css'

const Experience = () => {
const experiences = [
  {
    role: "Lead designer & IT support staff",
    jobType: "fulltime",
    company: "Venite University Iloro Ekiti",
    location: "Onsite, Nigeria",
    timeframe: "Nov, 2023 - Present",
    achievements: [
      "Created visually engaging designs for the institution's social media platforms, ensuring brand consistency and capturing the attention of the target audience which led to a growth of their accounts by 100%.",
      "Worked with network and devops engineers in setting up the biggest Computer based test (CBT) centre in Ekiti state."
    ]
  },
  {
    role: "Product designer",
    jobType: "contract",
    company: "Pykyp",
    location: "Remote, Nigeria",
    timeframe: "July, 2023 - Nov, 2023",
    achievements: [
      "Collaborated with a designer to redesign the landing page to one with a better user interface and user flow leading to 89% increase in site visitors and 52% increase in signups.",
      "Designed the Business and Admin Dashboards for Pykup logistics SAAS MVP with clears functions, CTAs and an awesome user experience for both the users and the business itself."
    ]
  },
  {
    role: "Product design Lead",
    jobType: "volunteer",
    company: "Globpay, a Techlift community project",
    location: "Remote, United States",
    timeframe: "June, 2023 - Aug, 2023",
    achievements: [
      "Collaborated cross-functionally to design and develop the landing page for a Fintech product that does crossborder payments.",
      "Oversee the design of the cross border payment app with an engaging onboarding process incorporating user experience best practices."
    ]
  },
  {
    role: "Brand & UI/UX designer",
    jobType: "internship",
    company: "Fountainpay",
    location: "Onsite, Nigeria",
    timeframe: "April, 2023 - Oct, 2023",
    achievements: [
      "Redesigned the company’s login page incorporating User experience best practices and optimizing userflow resulting to 60% increase in visits and engagements.",
      "Designed a low-fidelity design for the company’s careers page that was made a High-fidelity design by the design lead and brought to live by our developers.",
      "Single handedly designed the end-end User interface for an inhouse product that helps to simplify revenue payment and also help to track revenue influx for state governments.",
      "Collaborated with the design lead to design a user-friendly mobile banking app with an engaging onboarding process incorporating user experience best practices and it resulted to 99% sign up."
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
              <div className='role-company'>
                <p className='role-type'>{experience.role}<br/>({experience.jobType})</p>
                <p className='company'>{experience.company}</p>
              </div>
              <div className='location-time'>
                <p>{experience.location}</p>
                <p>{experience.timeframe}</p>
              </div>
            </div>
            <div className='job-achievements'>
              {experience.achievements.map((achievement, id) =>
                <div key={id}>
                  <p>*</p>
                  <p>{achievement}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience
