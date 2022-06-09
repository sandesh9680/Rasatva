import React from 'react'

const MembershipStatus = () => {
  return (
   <div className="col-md-9">
  <div className="account-right-section">
    <div className="personal-info-header">
      <h4>Membership Status</h4>
    </div>
    <div className="membership-status">
      <div className="vip-membership">
        <h6>Your Plan</h6>
        <div className="member-bg">
          <h4>VIP Membership</h4>
          <h5>Duration 1 years</h5>
          <p>Expires on may 26, 2022
            Time: 10.30 Am</p>
        </div>
      </div>
      <div className="vip-membership">
        <h6>Features</h6>
        <div className="member-bg">
          <ul>
            <li>Minimum 25% lower.</li>
            <li>Get equivalent Cashbacks fully redeemable on your next purchase.</li>
            <li>Offer applicable on ALL products</li>
            <li>Free Products/Samples</li>
            <li>Personal Assistance on WhatsApp</li>
            <li>Cash on Delivery</li>
            <li>Free Doorstep Delivery</li>
            <li>Priority Shipping</li>
            <li>*No Conditions Apply</li>
          </ul>
        </div>
      </div>
      <div className="vip-membership">
        <h6>Unit  price</h6>
        <div className="member-bg my-auto">
          <h4>₹ 999</h4>
          <a className="category-view-btn buynow1" href="#">Buy Now</a> 
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default MembershipStatus