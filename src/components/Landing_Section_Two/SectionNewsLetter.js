import React from 'react'

const SectionNewsLetter = () => {
  return (
   <div className="newsletter-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="newsletter-bg">
          <div className="newsletter-content  d-flex justify-content-between">
            <div className="newsletter-heading">
              <h5>Get the latest news delivered daily.</h5>
              <p>Give us your email and you will be daily updated with the latest events, in detail.</p>
            </div>
            <div className="newsletter-field my-auto">
              <form className="newsletter-sec">
                <div className="input-field">
                  <input type="text" placeholder="Enter your mobile no" className="form-control" />
                  <span><img src="images/landing/whatsapp.svg" alt /></span>
                </div>
                <input type="button" defaultValue="GET IN TOUCH" className="form-control submit-btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SectionNewsLetter