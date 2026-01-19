import React, {useState, useContext} from 'react'
import {ProductContext} from '../../Context/ProductContext'

const AddProduct = () => {
  const {productDetails, setProductDetails} = useContext(ProductContext)
  const [error, setError] = useState({})

  function handleChange(e){
    const {name, value} = e.target
    setProductDetails(pre=>({
      ...pre,
      [name]:value
    }))
  }
  function validate(){
    let newErrors = {}
    if(!productDetails.productName){
      newErrors.name = "Product Name is required"
    }
    if(!productDetails.productPrice){
      newErrors.price = "Product Price is required"
    }
    if(!productDetails.category){
      newErrors.cate = "Product Category is required"
    }
    if(!productDetails.productPic){
      newErrors.pic = "Product Image is required"
    }

    setError(newErrors)
  }
  function handleSubmit(e){
    e.preventDefault();
    if(validate())
      localStorage.setItem('Product Details', JSON.stringify(productDetails))
  }
  return (
    <>
    <div className="container team">
      <h1 className="text-center my-bg fs-4 text-center text-light rounded-2 py-1">
        Add Product
      </h1>
      <form action="" onSubmit={handleSubmit}>
      <div className="row mb-3">
      <input
          type="text"
          className="form-control"
          name="productName"
          placeholder="Product Name"
          onChange={(e)=>handleChange(e)}
        />
        {error.name && <p className='text-danger mb-0'>{error.name}</p>}
      </div>
      <div className="row mb-3">
        <input
          type="text"
          className="form-control"
          name="productPrice"
          placeholder="Product Price"
          onChange={(e)=>handleChange(e)}
        />
        {error.price && <p className='text-danger mb-0'>{error.price}</p>}
      </div>
      <div className="row mb-3">
        <select name="category" className='form-select' onChange={(e)=>handleChange(e)} value={productDetails.category}>
          <option value="">Select Category</option>
          <option value="chair">Chair</option>
          <option value="table">Table</option>
          <option value="almirah">Almirah</option>
        </select>
        {error.cate && <p className='text-danger mb-0'>{error.cate}</p>}
      </div>
      <div className="row mb-3">
        <input
          type="file"
          className=""
          name="productPic"
          placeholder="Bio" 
          onChange={(e)=>handleChange(e)}/>
          {error.pic && <p className='text-danger mb-0'>{error.pic}</p>}
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