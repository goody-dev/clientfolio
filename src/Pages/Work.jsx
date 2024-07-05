import React from 'react'
import CTASection from '../Components/CTASection'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'
import Landing from '../Components/Landing'
import ServiceLineScroll from '../Components/ServiceLineScroll'
import Projects from '../Components/Work'
import Hero from '../Components/Hero'

const Work = () => {
  return (
    <div className='pages'>
      <Hero />
      <Projects />
      <ServiceLineScroll />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Work
