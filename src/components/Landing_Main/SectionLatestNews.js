import React from 'react'

const SectionLatestNews = () => {
  return (
    <div className="latest-news-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="latest-news-title">
          <div className="heading-recipe p-0 text-center">
            <h2 className="product-featured-heading">Exquisite spices &amp; seasoning</h2>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6">
        <div className="news-banner" style={{backgroundImage: 'url(images/banner-latest1.png)'}}>
          <div className="news-content-box" />
          <div className="news-content-info">
            <span>28 Feb</span>
            <h4>Freshest spices are 
              from the high ranges</h4>
            <h6>by <strong>ADMINSM</strong> Feb 28, 2022</h6>
            <p>For the rest of us, what we will eat and where we will get it is a weekly, if not daily, consideration. Endlessly circulating the grocery store or local farmers’ market for produce can get monotonous</p>
            <div className="news-btn">
              <a className="category-view-btn" href="#">Read more &nbsp;&nbsp;<i className="fa fa-angle-right" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6">
        <div className="news-banner" style={{backgroundImage: 'url(images/banner-latest2.png)'}}>
          <div className="news-content-box" />
          <div className="news-content-info">
            <span>01 March</span>
            <h4>Health benefits of 
              fresh Indian spices</h4>
            <h6>by <strong>ADMINSM</strong> March 01, 2022</h6>
            <p>Spices have always been used since ancient times for making food tastier. The high ranges of Kerala have long been known as the cradle of spices where the best spices in the world are cultivated and produced in abundance...</p>
            <div className="news-btn">
              <a className="category-view-btn" href="#">Read more &nbsp;&nbsp;<i className="fa fa-angle-right" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 mt-5 text-center">
        <a className="btn shop-now-btn" href="#">View more
          <svg xmlns="http://www.w3.org/2000/svg" width="10.135" height="17.415" viewBox="0 0 10.135 17.415">
            <path id="arrow_right" d="M0,16,8,7.7,0,0" transform="translate(0.72 0.721)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default SectionLatestNews