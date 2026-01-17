import React from 'react'

const AddProduct = () => {
  return (
    <>
    <div className="container team">
      <h1 className="text-center my-bg fs-4 text-center text-light rounded-2 py-1">
        Add Product
      </h1>
      <form action="">
      <div className="row mb-3">
      <input
          type="text"
          className="form-control"
          name="productName"
          placeholder="Product Name"
        />
      </div>
      <div className="row mb-3">
        <input
          type="text"
          className="form-control"
          name="productPrice"
          placeholder="Product Price"
        />
      </div>
      <div className="row mb-3">
        <select name="Category" className='form-select'>
          <option value="chair">Chair</option>
          <option value="table">Table</option>
          <option value="almirah">Almirah</option>
        </select>
      </div>
      <div className="row mb-3">
        <input
          type="file"
          className=""
          name="productPic"
          placeholder="Bio"
        />
      </div>
      <div className="row mb-3 justify-content-center">
        <div className="col-md-6">
        <button type='submit' className="btn btn-primary fs-5 w-100">Submit</button>
        </div>
      </div>
      </form>
    </div>
  </>
  )
}

export default AddProduct