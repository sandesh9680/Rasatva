import React from 'react'
import SectionHappyClientCrousel from './SectionHappyClientCrousel'
import SectionRasatvaIndiaCrousel from './SectionRasatvaIndiaCrousel'

const SectionHappyClient = () => {
  return (
      <>
<div className="our-client-section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="product-featured">
          <h2 className="product-featured-heading">What our happy client Say</h2>
          <p>Don't take our word for it... Read what our customers feel about our products!</p>
        </div>
      </div>
      <div className="col-md-12">
          <SectionHappyClientCrousel/>
      </div>
    </div>
  </div>
</div>


<div className="our-client-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="product-featured">
          <h2 className="product-featured-heading">Follow us on @rasatvaindia</h2>
        </div>
      </div>
      <div className="col-md-12">
        <div className="instagram-post">
          <div className="owl-theme recip-uses-carousle carousel-arrows explor-choose-slider" id="instagram-carousle">
           <SectionRasatvaIndiaCrousel/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>

    )
}

export default SectionHappyClient