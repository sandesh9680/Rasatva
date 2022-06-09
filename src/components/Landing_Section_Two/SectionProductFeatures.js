import React from 'react'
import SectionProductFeaturesCrousel from '../Landing_Section_One/SectionProductFeaturesCrousel'

const SectionProductFeatures = () => {
  return (
      <>
 <section className="product-featured-bg">
  <div className="container">
    <div className="row">
      <div className="col-xl-12 text-center">
        <div className="product-featured">
          <h2 className="product-featured-heading">Product Features</h2>
          <p>Basil or ‘sabja’ seeds are highly nutritious and a modern day health food definitely worth adding to the diet. It is rich in iron, calcium, fibre, omega-3 fatty acids and various micronutrients.</p>
        </div>
        <div className="featured-product"> <img src="images/landing/basil-product.jpg" className="img-fluid" alt /> </div>
        <div className="features-basic-info">
          <ol className="featureinfo">
            <li>Basil or ‘sabja’ seeds are highly nutritious and a modern day health food definitely worth adding to the diet. </li>
            <li>Meticulously sorted and packed mindfully to preserve its natural benefits, it is rich in iron, calcium, fibre, omega-3 fatty acids and various micronutrients. </li>
            <li>These tiny seeds form a gel when soaked in water and can be consumed as a health drink. </li>
            <li>It can also be used in smoothies, summer drinks or as a sprinkle while baking.</li>
          </ol>
        </div>
        <div className="shipping-section">
          <div className=" owl-theme carousel-arrows" id="shipping-carousel">


          <SectionProductFeaturesCrousel/>

           


          </div>
          <div className="discount-btns"> <span>25%<br />
              OFF</span> <a className="btn shop-now-btn" href="#">SHOP NOW
              <svg xmlns="http://www.w3.org/2000/svg" width="10.135" height="17.415" viewBox="0 0 10.135 17.415">
                <path id="arrow_right" d="M0,16,8,7.7,0,0" transform="translate(0.72 0.721)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </a> </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="membership-section">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="membership-price">
          <ul className="nav members-sec">
            <li><span>LOWER</span><br />
              @40%</li>
            <li className="price-rupes"><span><del>₹339</del></span><br />
              ₹200</li>
            <li className="price-save"><span>SAVE</span><br />
              ₹139</li>
          </ul>
          <div className="membership-btm">
            <p>Buy the membership for aware the best price</p>
            <a className="btn shop-now-btn" href="#">SHOP NOW
              <svg xmlns="http://www.w3.org/2000/svg" width="10.135" height="17.415" viewBox="0 0 10.135 17.415">
                <path id="arrow_right" d="M0,16,8,7.7,0,0" transform="translate(0.72 0.721)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </a> </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </>
  



  )
}

export default SectionProductFeatures