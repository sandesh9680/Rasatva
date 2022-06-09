import React from 'react'
import SectionTestimonialCrouser from './SectionTestimonialCrouser'

const SectionTestimonial = () => {
  return (
    
<div className="testimonial-carousle">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="testimonial-heading d-flex justify-content-between">
          <h2 className="product-featured-heading">Reviews</h2>
          <div className="review-star my-auto">
            <ul className="nav">
              <li><span>4.8</span></li>
              <li><img src="images/landing/star.png" alt="star" /></li>
              <li><img src="images/landing/star.png" alt="star" /></li>
              <li><img src="images/landing/star.png" alt="star" /></li>
              <li><img src="images/landing/star.png" alt="star" /></li>
              <li><img src="images/landing/star.png" alt="star" /></li>
            </ul>
          </div>
        </div>




        <div className="owl-theme testimonialarrow carousel-arrows" id="testimonial-carousel">


        
         <SectionTestimonialCrouser/>



        </div>
        <div className="discount-btns discount-testimonial"> <span>25%<br />
            OFF</span> <a className="btn shop-now-btn" href="#">SHOP NOW
            <svg xmlns="http://www.w3.org/2000/svg" width="10.135" height="17.415" viewBox="0 0 10.135 17.415">
              <path id="arrow_right" d="M0,16,8,7.7,0,0" transform="translate(0.72 0.721)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </a> </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SectionTestimonial