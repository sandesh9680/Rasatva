import React from 'react'



const PointsUpperData = () => {
  return (
    <div className="points-table">
    <div className="points-info">
      <h6>Available Points</h6>
      <h1>3,500</h1>
      <p><span>Point Worth:</span> 50 = ₹1 </p>
    </div>
    <div className="points-info">
      <h6>Points Worth</h6>
      <h1>₹70</h1>
    </div>
    <div className="points-info">
      <h6>Redeem reward points</h6>
      <form className="newsletter-sec">
        <div className="input-field">
          <input type="text" placeholder="Enter redeem points" className="form-control" />
        </div>
        <input type="button" defaultValue="Redeem Point" className="form-control submit-btn" />
      </form>
    </div>
    <div className="points-info">
      <h6><strong>How to redeem your reward points.   </strong></h6>
      <small>Redeem your reward points manually.</small>
      <small>Select your reward points to redeem.</small>
      <small>Minimum 100 points redeem at a time</small>
    </div>
  </div>
  )
}

export default PointsUpperData