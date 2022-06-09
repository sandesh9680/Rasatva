import React from 'react'

const AccountDetails = () => {
  return (
    <div className="col-md-9">
  <div className="account-right-section">
    <div className="personal-info-header d-flex justify-content-between">
      <h4>Personal Details</h4>
      <a href="#"><i className="fa fa-pencil" aria-hidden="true" /> Edit</a>
    </div>
    <div className="user-information">
      <div><span>User name:</span><p>Smith Rodes</p></div>
      <div><span>Date of birth:</span><p>1996</p></div>
      <div><span>Address:</span><p>4056 Vesta Drive, Armonk Village, 
          New York, 10504,
          USA</p></div>
      <div><span>Phone:</span><p>+91 1234567890</p></div>
      <div><span>Email:</span><p>smith_rodes@gmail.com</p></div>
    </div>
    <div className="personal-info-header d-flex justify-content-between">
      <h4>Recent Activity</h4>
      <a href="#">View All</a>
    </div>
    <div className="user-activitys">
      <div className="activity-user">
        <img src="../../../public/images/landing/user.png" className="img-fluid" alt="landing" />
      </div>
      <div className="recent-activity"><h6>Smith Rodes</h6>
        <small>reviewed a product . 10 Apr 2022</small>
        <div className="star-review text-left"> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star-o" aria-hidden="true" /></span> <span className="star-valu">(5)</span> </div>
        <p>Buy "Cumin Seeds " very good quality products</p>
      </div>
    </div>
    <div className="user-activitys">
      <div className="activity-user">
        <img src="images/landing/user.png" className="img-fluid" alt="landing" />
      </div>
      <div className="recent-activity"><h6>Smith Rodes</h6>
        <small>reviewed a product . 10 Apr 2022</small>
        <div className="star-review text-left"> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star-o" aria-hidden="true" /></span> <span className="star-valu">(5)</span> </div>
        <p>Buy "Cumin Seeds " very good quality products</p>
      </div>
    </div>	
    <a className="see-review-btn" href="#">See full review</a>	
  </div>
</div>

  )
}

export default AccountDetails