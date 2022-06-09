import React from 'react'
import userIcon1 from "../../assets/images/logos/images/search_icon.svg"
import userIcon2 from "../../assets/images/logos/images/user_icon.svg"
import userIcon3 from "../../assets/images/logos/images/cart_icon.svg"

const HeaderLayout = () => {
  return (
  <header className="my-account-bg" style={{backgroundImage: 'url(images/my-account-banner.png)'}}>
  <div className="container">
    <div className="row">
      <div className="my-account-header col-xl-12 d-flex justify-content-between">
        <div className="logo"><a href="index.html"><img src="./images/logo.png" className="img-fluid" /></a></div>
        <div className="acount-title-heading my-auto">
          <h3>My Account</h3>
        </div>
        <div className="top_links my-auto"> <a href="#"><img src={userIcon1} className="img-fluid" /></a> <a href="#"><img src={userIcon2} className="img-fluid" /></a> <a href="#"><img src={userIcon3} className="img-fluid" /></a> </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default HeaderLayout