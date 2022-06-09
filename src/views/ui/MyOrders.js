import React from 'react'
import AllOrdersTable from '../MyOrdersTable/AllOrdersTable'
import Delivered from '../MyOrdersTable/Delivered'
import Processing from '../MyOrdersTable/Processing'
import Cancelled from '../MyOrdersTable/Cancelled'

const MyOrders = () => {
  return (
  <div className="col-md-9">
  <div className="account-right-section">
    <div className="personal-info-header ordertabs d-flex justify-content-between">
      <h4>My Orders</h4>
      <div>
        <ul className="nav my-order-tabs nav-tabs feedback-tabs" id="myTab" role="tablist">
          <li className=" nav-item-length nav-item" role="presentation"> <a className=" nav-item-length nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All Orders</a> </li>
          <li className=" nav-item-length nav-item" role="presentation"> <a className=" nav-item-length nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Delivered" type="button" role="tab" aria-controls="profile" aria-selected="false">Delivered</a> </li>
          <li className=" nav-item-length nav-item" role="presentation"> <a className=" nav-item-length nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Processing" type="button" role="tab" aria-controls="profile" aria-selected="false">Processing</a> </li>
          <li className=" nav-item-length nav-item" role="presentation"> <a className=" nav-item-length nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Cancelled" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancelled</a> </li>
        </ul>
      </div>
    </div>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <AllOrdersTable/>
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
      <div className="tab-pane fade" id="Delivered" role="tabpanel" aria-labelledby="profile-tab">
        <Delivered/>
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
      <div className="tab-pane fade" id="Processing" role="tabpanel" aria-labelledby="profile-tab">
        <Processing/>
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
      <div className="tab-pane fade" id="Cancelled" role="tabpanel" aria-labelledby="profile-tab">
        <Cancelled/>
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
  </div>
</div>

  )
}

export default MyOrders