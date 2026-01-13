import React from 'react'
import Hero from '../components/Hero'
import WhyChooseMe from '../components/WhyChooseMe'
import Testimonial from '../components/Testimonial'
import Team from '../components/Team'

const About = () => {
  return (
    <>
    <Hero title={"About"} />
    <WhyChooseMe />
    <Team />
    <Testimonial />
    </>
  )
}

export default About