import React from 'react'

const Reviews = () => {
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
            <label>Rating</label>
            <div className="rate star-rating">
              <div className="rating">
                <input type="radio" name="rating" defaultValue={1} id={11} />
                <label htmlFor={11}>☆</label>
                <input type="radio" name="rating" defaultValue={2} id={12} />
                <label htmlFor={12}>☆</label>
                <input type="radio" name="rating" defaultValue={3} id={13} />
                <label htmlFor={13}>☆</label>
                <input type="radio" name="rating" defaultValue={4} id={14} />
                <label htmlFor={14}>☆</label>
                <input type="radio" name="rating" defaultValue={5} id={15} />
                <label htmlFor={15}>☆</label>
              </div>
            </div>
          </div>
        </div>	
        <div className="col-md-12">
          <div className="testimonial-field">
            <label>Which product would you like to review ?</label>
            <select className="form-control">
              <option>Select product</option>
              <option>Products</option>
              <option>Products</option>
              <option>Products</option>
              <option>Products</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="testimonial-field">
            <label>Your review</label>
            <textarea placehloder rows={4} className="form-control" defaultValue={""} />
          </div>
        </div>
        <div className="col-md-12 text-end">
          <div className="testimonial-field">
            <input type="button" defaultValue="Submit review" className="form-control submit-btn btn-color1" />
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

  )
}

export default Reviews