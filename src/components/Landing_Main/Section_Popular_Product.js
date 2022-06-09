import React from 'react'
import Section_Popular_Product_Data from './Section_Popular_Product_Data'

const Section_Popular_Product = () => {
  return (
   <section className="product-featured-bg popularproduct" style={{backgroundImage: 'url(images/popular-products-bg.svg)'}}>
  <div className="container">
    <div className="row">
      <div className="col-xl-12 text-center">
        <div className="product-featured">
          <h2 className="product-featured-heading">Popular Products</h2>
          <ul className="nav nav-tabs product_tabs d-flex justify-content-center">
            <li className="nav-item"> <a className="nav-link active" data-bs-toggle="tab" href="#home">New Arrivals</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#menu1">Bestsellers</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#menu2">Recommended</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#Special-Offers">Special Offers</a> </li>
          </ul>
        </div>
      </div>
    </div>



    <div className="tab-content">
      <div className="tab-pane active" id="home">
        <div className="row">

        <Section_Popular_Product_Data/>


          <div className="col-md-12 text-center">
            <nav className="pagination-section" aria-label="...">
              <ul className="pagination pagination-bottom d-flex justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1} aria-disabled="true"><i className="fa fa-angle-left" aria-hidden="true" /></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#"><i className="fa fa-angle-right" aria-hidden="true" /></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default Section_Popular_Product