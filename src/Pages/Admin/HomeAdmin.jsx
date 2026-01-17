import React from 'react'
import Hero from '../../components/Hero'
import Profile from '../../components/Profile'
import AdminSidebar from './AdminSidebar'
import AddTeam from './AddTeam'
import AddProduct from './AddProduct'
import AddTestimonial from './AddTestimonial'
import {Routes, Route} from 'react-router-dom'

const HomeAdmin = () => {
  return (
    <>
    <Hero title={"Admin"}/>
    <div className='container'>
      <div className="row my-3">
        <div className="col-md-3">
        <AdminSidebar />
        </div>
        <div className="col-md-9">
        <Routes>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/team' element={<AddTeam/>} />
          <Route path='/product' element={<AddProduct/>} />
          <Route path='/testimonial' element={<AddTestimonial/>} />
        </Routes>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default HomeAdmin