import React from 'react'
import Services from '../components/Services'
import Product from '../components/Product'
import Testimonial from '../components/Testimonial'
import Hero from '../components/Hero'

const ServicesPage = () => {
  return (
    <>
    <Hero title={"Service"} />
    <Services />
    <Product />
    <Testimonial />
    </>
  )
}

export default ServicesPage