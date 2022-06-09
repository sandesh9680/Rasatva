import React from 'react'
import WishlistData from '../WishlistTable/WishlistData'

const Wishlist = () => {
  return (
   <div className="col-md-9">
  <div className="account-right-section">
    <div className="personal-info-header">
      <h4>My Wishlist</h4>
    </div>
    <div className="table-responsive table-account">
      <table width="100%" border={0} className="table-order wishlist-list" cellSpacing={15} cellPadding={15}>
        <tbody><tr>
            <th scope="col">&nbsp;</th>
            <th scope="col">Product name</th>
            <th scope="col">Unit price</th>
            <th scope="col">Stock status</th>
            <th scope="col">&nbsp;</th>
          </tr>



        <WishlistData/>


        </tbody></table>
    </div>
    <div className="text-center">
      <nav className="pagination-section" aria-label="...">
        <ul className="pagination pagination-bottom pagination-border d-flex justify-content-end">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true"><i className="fa fa-angle-left" aria-hidden="true" /></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#"><i className="fa fa-angle-right" aria-hidden="true" /></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

  )
}

export default Wishlist