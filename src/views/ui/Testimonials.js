import React from 'react'

const Testimonials = () => {
  return (
   <div className="col-md-9">
  <div className="account-right-section">
    <div className="personal-info-header">
      <h4>Testimonials</h4>
    </div>
    <form>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="testimonial-field">
            <label>Name</label>
            <input type="text" placeholder className="form-control" />
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="testimonial-field">
            <label>Last name</label>
            <input type="text" placeholder className="form-control" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="testimonial-field">
            <label>Email ID</label>
            <input type="email" placeholder className="form-control" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="testimonial-field">
            <label>Your message</label>
            <textarea placehloder rows={4} className="form-control" defaultValue={""} />
          </div>
        </div>
        <div className="col-md-12 text-end">
          <div className="testimonial-field">
            <input type="button" defaultValue="SUBSCRIBE" className="form-control submit-btn btn-color1" />
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

  )
}

export default Testimonials