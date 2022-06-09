import React from 'react'

const SectionFooter = () => {
  return (
    <div className="footer-landing">
  <div className="container">
    <div className="border-footer">
      <div className="row">
        <div className="col-md-4 col-xl-4 my-auto">
          <div className="footer-content">
            <p>© 2022 Rasatva.com. All Rights Reserved.</p>
          </div>
        </div>
        <div className="col-md-4 col-xl-4 my-auto text-center">
          <div className="footer-content">
            <p><a href="#">Terms of Use &amp; Legal Policies</a></p>
          </div>
        </div>
        <div className="col-md-4 col-xl-4 text-right">
          <div className="footer-content">
            <ul className="nav">
              <li><a href="#"><img src="images/landing/facbook_icon.svg" alt /></a></li>
              <li><a href="#"><img src="images/landing/instagram_icon.svg" alt /></a></li>
              <li><a href="#"><img src="images/landing/twitter_icon.svg" alt /></a></li>
              <li><a href="#"><img src="images/landing/youtube_icon.svg" alt /></a></li>
              <li><a href="#"><img src="images/landing/whatsapp_icon.svg" alt /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SectionFooter