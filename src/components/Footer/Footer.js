import React from 'react'

const Footer = () => {
  return (
  <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="footer-box">
          <div className="footer-item">
            <a href="#"><img src="images/footer-logo.png" className="img-fluid" alt = "img" /></a>
          </div>
          <div className="footer-item">
            <p>Rasatva VIP Membership Program
              has been introduced for our regular 
              customers who wish to avail of great 
              prices, special offers, priority...</p>
            <a className="membership-btn" href="#">VIP Memberships <i className="fa fa-angle-right" aria-hidden="true" /></a>
          </div>
          <div className="footer-item">
            <p>Gift quality products to your family 
              and friends. Simply buy a Gift 
              Certificate of any value you want, 
              and send...</p>
            <a className="membership-btn" href="#">Gift Certificates <i className="fa fa-angle-right" aria-hidden="true" /></a>
          </div>
          <div className="footer-item">
            <h5>Category</h5>
            <ul className="nav">
              <li><a href="#">Spices </a></li>       
              <li><a href="#">Wellness </a></li>           
              <li><a href="#">Good Foods </a></li>             
              <li><a href="#">Signature </a></li>              
              <li><a href="#">Combos  </a></li>           
              <li><a href="#">Kitchen Essentials</a></li>       
            </ul>	
          </div>
          <div className="footer-item">
            <h5>We would love to hear from you</h5>
            <ul className="nav feedback-testimonial">
              <li><a href="#"><img src="images/comment.svg" alt = "img" /> Feedback</a> </li>
              <li><a href="#"><img src="images/Testimonial.svg" alt = "img" /> Testimonials </a></li>
              <li><a href="#"><img src="images/mail_icon2.svg" alt = "img" /> Contact Us</a></li>
              <li><a href="#"><img src="images/Business.svg" alt = "img" /> Business Opportunities</a></li>
            </ul>
          </div>
          <div className="footer-item">
            <h5>Follow/Share:</h5>
            <div className="footer-content">
              <ul className="nav">
                <li><a href="#"><img src="./images/landing/facbook_icon.svg" alt = "img" /></a></li>
                <li><a href="#"><img src="./images/landing/instagram_icon.svg" alt = "img" /></a></li>
                <li><a href="#"><img src="./images/landing/twitter_icon.svg" alt = "img" /></a></li>
                <li><a href="#"><img src="./images/landing/youtube_icon.svg" alt = "img" /></a></li>
                <li><a href="#"><img src="./images/landing/whatsapp_icon.svg" alt = "img" /></a></li>
              </ul>
            </div>
            <div className="app-stor">
              <h5>Get out app:</h5>
              <a href="#"><img src="images/app-store-icon.svg" className="img-fluid" alt = "img" /></a>
              <a href="#"><img src="images/google-play-icon.svg" className="img-fluid" alt = "img" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-footer mt-4">
      <div className="row">
        <div className="col-md-4 col-xl-4 col-sm-3 my-auto">
          <div className="footer-content">
            <a className="about-us" href="#">About Us</a>
          </div>
        </div>
        <div className="col-md-4 col-xl-4 col-sm-5 order-2 order-sm-1 order-md-1 order-lg-1 order-xl-1 my-auto text-center">
          <div className="footer-content">
            <p>© 2022 Rasatva.com. All Rights Reserved.</p>
          </div>
        </div>
        <div className="col-md-4 col-xl-4 col-sm-4 order-1 order-sm-2 order-md-2 order-lg-2 order-xl-2 text-end">
          <div className="footer-content">
            <p><a href="#">Terms of Use &amp; Legal Policies</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer