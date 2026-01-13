import React from 'react'
import Hero from '../components/Hero'
import Product from '../components/Product'
import WhyChooseMe from '../components/WhyChooseMe'
import Help from '../components/Help'
import PopularProduct from '../components/PopularProduct'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'

const HomePage = () => {
  return (
    <>
    <Hero title={"Modern Interior Design Studio"} />
    <Product />
    <WhyChooseMe />
    <Help />
    <PopularProduct />
    <Testimonial />
    <Blog />
    </>
  )
}

export default HomePage