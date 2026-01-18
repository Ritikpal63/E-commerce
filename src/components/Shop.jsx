import React from "react";
import {Link} from 'react-router-dom'
// import {ProductContext} from '../Context/ProductContext'


const Shop = () => {
  // const {productDetails} = useContext(ProductContext)
  const productDetails = JSON.parse(localStorage.getItem("Product Details"))
  return (
    <>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail" alt='pic'
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" alt='pic' />
                </span>
              </Link>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/">
                <img
                  src="images/product-1.png"
                  className="img-fluid product-thumbnail" alt='pic'
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" alt='pic' />
                </span>
              </Link>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/">
                <img
                  src="images/product-2.png"
                  className="img-fluid product-thumbnail" alt='pic'
                />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" alt='pic' />
                </span>
              </Link>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail" alt='pic'
                />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" alt='pic' />
                </span>
              </Link>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail" alt='pic'
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" alt='pic' />
                </span>
              </Link>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/">
                <img
                  src="images/product-1.png"
                  className="img-fluid product-thumbnail" alt='pic'
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" alt='pic' />
                </span>
              </Link>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <Link className="product-item" to="/">
                <img
                  src="images/product-2.png"
                  className="img-fluid product-thumbnail" alt='pic'
                />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" alt='pic' />
                </span>
              </Link>
            </div>
            {
              productDetails
              ? (
                <div className="col-12 col-md-4 col-lg-3 mb-5">
                  <Link className="product-item" to="/admin/product">
                    <img
                      src="/images/product-3.png"
                      className="img-fluid product-thumbnail" alt='pic'
                    />
                    <h3 className="product-title">{productDetails.productName}</h3>
                    <strong className="product-price">${productDetails.productPrice}</strong>
    
                    <span className="icon-cross">
                      <img src="images/cross.svg" className="img-fluid" alt='pic' />
                    </span>
                  </Link>
                </div>)
              :"Loading..."
              } 
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
