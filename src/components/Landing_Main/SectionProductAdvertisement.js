import React from 'react'

const SectionProductAdvertisement = () => {
  return (
    <div className="popular_products-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-lg-6 col-xl-6 d-flex">
        <div className="product-natural">
          <div className="product_popular-title">
            <h2>100% Pure Natural Powder Spices</h2>
            <div className="w-100 d-flex">
              <small>100% Pure Natural
                Powder Spices</small>
            </div>
            <a className="category-view-btn" href="#">Shop Now &nbsp;&nbsp;<i className="fa fa-angle-right" aria-hidden="true" /></a> 
          </div>
          <div className="product_image_popular">
            <img src="images/product7.png" className="img-fluid" alt />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-6">
        <div className="product-natural" style={{background: '#AEC855'}}>
          <div className="product_popular-title combo-pack">
            <span>150g x 2 Pack</span>
            <h2>Combo - 
              Coriander Powder</h2>
            <div className="w-100 d-flex">
              <small style={{background: '#fff', color: '#000'}}>VIP Members Price:  147</small>
            </div>
            <a className="category-view-btn" href="#">Shop Now &nbsp;&nbsp;<i className="fa fa-angle-right" aria-hidden="true" /></a> 
          </div>
          <div className="product_image_popular">
            <img src="images/product8.png" className="img-fluid" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SectionProductAdvertisement