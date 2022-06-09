import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Header1 = () => {
  return (
<>
<div className="col-xl-12 ">
    <div className=" owl-theme" >
<Carousel>
  <Carousel.Item>
  <div className="item d-flex justify-content-between">
        <div className="slider_content align-self-center">
          <h2>Kitchen Essentials</h2>
          <p>Natural, Authentic Spices from native origins for your needs</p>
          <a href="#">Shop Now <i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
        <div className="slider_img"><img src="./images/slider_1.png" className="img-fluid" /></div>
      </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="item d-flex justify-content-between">
        <div className="slider_content align-self-center">
          <h2>Kitchen Essentials</h2>
          <p>Natural, Authentic Spices from native origins for your needs</p>
          <a href="#">Shop Now <i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
        <div className="slider_img"><img src="./images/slider_1.png" className="img-fluid" /></div>
      </div>
  </Carousel.Item>  
</Carousel>
</div>
</div>
</>
);
}

export default Header1