import React from 'react'

const SectionNewsLetter = () => {
  return (
  <div className="newsletter_section">
  <div className="container">
    <div className="row">
      <div className="col-md-10 col-lg-8 col-xl-6 text-center mx-auto">
        <div className="newsletter-delivery">
          <h1>Get the latest news delivered daily.</h1>
          <p>Give us your email and you will be daily updated with the latest events, in detail.</p>
        </div>
        <div className="newsletter-field w-100">
          <form className="newsletter-sec">
            <div className="input-field">
              <input type="text" placeholder="Enter your email address" className="form-control" />
              <span className="mail-icon-news"><img src="images/landing/mail-icon.svg" alt /></span> </div>
            <input type="button" defaultValue="SUBSCRIBE" className="form-control submit-btn btn-color1" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SectionNewsLetter