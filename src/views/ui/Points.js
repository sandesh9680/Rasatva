import React from 'react'
import PointsLowerData from '../PointsTable/PointsLowerData'
import PointsUpperData from '../PointsTable/PointsUpperData'

const Points = () => {
  return (
    <div className="col-md-9">
  <div className="account-right-section">
    <div className="personal-info-header">
      <h4>Redeem Rewards Points</h4>
    </div>



   <PointsUpperData/>


    <div className="table-responsive table-account mt-3 points-tabless">
      <table width="100%" border={0} className="table-order wishlist-list" cellSpacing={15} cellPadding={15}>
        <tbody>



       <PointsLowerData/>



        </tbody></table>
    </div>
    <div className="text-center">
      <nav className="pagination-section" aria-label="...">
        <ul className="pagination pagination-bottom pagination-border d-flex justify-content-end">
          <li className="page-item disabled"> <a className="page-link" href="#" tabIndex={-1} aria-disabled="true"><i className="fa fa-angle-left" aria-hidden="true" /></a> </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page"> <a className="page-link" href="#">2</a> </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"> <a className="page-link" href="#"><i className="fa fa-angle-right" aria-hidden="true" /></a> </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

  )
}

export default Points