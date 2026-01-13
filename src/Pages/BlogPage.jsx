import React from 'react'
import Hero from '../components/Hero'
import MainBlog from '../components/MainBlog'
import Testimonial from '../components/Testimonial'

const Blog = () => {
  return (
    <>
      <Hero title={"Blog"} />
      <MainBlog />
      <Testimonial />
    </>
  )
}

export default Blog