import React from 'react'
import Header1 from './Header1'

const Header = () => {
  return (
 <header>
  <div className="container">
    <div className="row">
      <div className="col-xl-12 d-flex justify-content-between">
        <div className="logo"><a href="index.html"><img src="./images/logo.png" className="img-fluid" /></a></div>
        <div className="top_links"> 
          <a href="#"><img src="./images/search_icon.svg" className="img-fluid" /></a> 
          <a href="my-account.html"><img src="./images/user_icon.svg" className="img-fluid" /></a> 
          <a href="#"><img src="./images/cart_icon.svg" className="img-fluid" /></a> </div>
      </div>


    <Header1/>

      {/* <div className="col-xl-12 ">
        <div className="owl-carousel owl-theme" id="slider_top">
          <div className="item d-flex justify-content-between ">
            <div className="slider_content align-self-center">
              <h2>Kitchen Essentials</h2>
              <p>Natural, Authentic Spices from native origins for your needs</p>
              <a href="#">Shop Now <i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
            <div className="slider_img"><img src="./images/slider_1.png" className="img-fluid" /></div>
          </div>
          <div className="item d-flex justify-content-between">
            <div className="slider_content align-self-center">
              <h2>Kitchen Essentials</h2>
              <p>Natural, Authentic Spices from native origins for your needs</p>
              <a href="#">Shop Now <i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
            <div className="slider_img"><img src="./images/slider_1.png" className="img-fluid" /></div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</header>

  )
}

export default Header