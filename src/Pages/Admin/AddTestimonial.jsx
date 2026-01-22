import React, { useState, useContext } from "react";
import { TestimonialContext } from "../../Context/TestimonialContext";

const AddTestimonial = () => {
  const { testimonialDetails, setTestimonialDetails, addTestimonial } = useContext(TestimonialContext);
  const [error, setError] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setTestimonialDetails((pre) => ({
      ...pre,
      [name]: value,
    }));
  }

  function validate() {
    let newErrors = {};
    let isValid = true;
    if (!testimonialDetails.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!testimonialDetails.review) {
      newErrors.review = "Review is required";
      isValid = false;
    }
    if (!testimonialDetails.image) {
      newErrors.image = "Image is required";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {
      addTestimonial(testimonialDetails);
      alert("Testimonial added successfully!");
      setTestimonialDetails({
        name:'',
        review:'',
        image:''
      });
    }
  }

  return (
    <div className="container testimonial">
      <h1 className="text-center my-bg fs-4 text-center text-light rounded-2 py-1">
        Add Testimonial
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={testimonialDetails.name}
            onChange={handleChange}
          />
          {error.name && <p className='text-danger mb-0'>{error.name}</p> }
        </div>
        <div className="row mb-3">
          <textarea
            className="form-control"
            name="review"
            placeholder="Review"
            value={testimonialDetails.review}
            onChange={handleChange}
          />
          {error.review && <p className='text-danger mb-0'>{error.review}</p> }
        </div>
        <div className="row mb-3">
          <input
            type="file"
            name="image"
            onChange={handleChange}
          />
          {error.image && <p className='text-danger mb-0'>{error.image}</p> }
        </div>
        <div className="row mb-3 justify-content-center">
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary fs-5 w-100">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTestimonial