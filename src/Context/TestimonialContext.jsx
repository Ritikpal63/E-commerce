import {createContext, useState} from 'react'

export const TestimonialContext = createContext()

export const TestimonialProvider = ({children}) =>{
  const[testimonialDetails, setTestimonialDetails] = useState({
    name:'',
    review:'',
    image:''
  })

  const addTestimonial = (details) => {
    setTestimonialDetails(details);
    localStorage.setItem("Testimonial Details", JSON.stringify(details));
  }

  return (
    <TestimonialContext.Provider value={{testimonialDetails, setTestimonialDetails, addTestimonial}}>
      {children}
    </TestimonialContext.Provider>
)
}
