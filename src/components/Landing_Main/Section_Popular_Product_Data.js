import React from 'react'


const data = [

    { id : 1 , offProduct : "25%" , img : "images/product1.png" },
    { id : 2 , offProduct : "25%" , img : "images/product1.png" },
    { id : 3 , offProduct : "25%" , img : "images/product1.png" },
    { id : 4 , offProduct : "25%" , img : "images/product1.png" },
    { id : 5 , offProduct : "25%" , img : "images/product1.png" },
    { id : 6 , offProduct : "25%" , img : "images/product1.png" },
    { id : 7 , offProduct : "25%" , img : "images/product1.png" },
    { id : 8 , offProduct : "25%" , img : "images/product1.png" },
    
     
  
  ]

const Section_Popular_Product_Data = () => {
  return (<>
    {
        data.map((item)=>{

               return (  <div  key={item.id} className="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
               <div className="product-hovers">
                 <div className="popular-products-list">
                   <div className="off-product">25%<br />
                     Off</div>
                   <div className="product_popular_img"> <a href="#"><img src={item.img} height={276} className="img-fluid" alt /></a> </div>
                   <div className="favorit-icon">
                     <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> </a>
                   </div>
                   <div className="favorit-icon share-icon">
                     <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /> </a>
                   </div>
                   <div className="video-popup">
                     <div id="demo" className="carousel slide" data-bs-ride="carousel">
                       <div className="carousel-inner">
                         <div className="carousel-item active">
                           <iframe width="100%" height={276} src="https://www.youtube.com/embed/n_OZRemvr0w" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                         </div>
                         <div className="carousel-item">
                           <iframe width="100%" height={276} src="https://www.youtube.com/embed/n_OZRemvr0w" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                         </div>
                         <div className="carousel-item">
                           <iframe width="100%" height={276} src="https://www.youtube.com/embed/n_OZRemvr0w" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                         </div>
                       </div>
                       <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev"> <span className="carousel-control-prev-icon" /> </button>
                       <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next"> <span className="carousel-control-next-icon" /> </button>
                     </div>
                   </div>
                   <div className="star-review"> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star-o" aria-hidden="true" /></span> <span className="star-valu">(5)</span> </div>
                   <div className="product-info">
                     <p>High Curcumin Turmeric Powder 
                       - Organic (Lakadong Chyrmit)</p>
                     <div className="sub-info">
                       <p>Our cumin seeds have a peppery aroma, earthy warm flavour and high nutritional value. It is freshly packed as per orders...</p>
                     </div>
                   </div>
                   <div className="product-price">
                     <div className="price-mrp">
                       <h5><small>MRP</small><span><del>₹339</del></span><i className="fa fa-inr" aria-hidden="true" />239</h5>
                       <p>Net Weight: <span>100 g</span> (Price 1 Kg @ ₹500)</p>
                     </div>
                     <h5 className="save-price"><small>Save</small><i className="fa fa-inr" aria-hidden="true" />100</h5>
                   </div>
                   <div className="discount-bg d-flex justify-content-between">
                     <h4><small>Get it</small><span>@ 40%</span>Lower</h4>
                     <a href="#">Know more <img src="images/now-more-icon.svg" alt /></a> </div>
                   <div className="price-qty-count">
                     <div className="product-footer-qty d-flex justify-content-between">
                       <div className="qty-btn">
                         <div className="counter"> <small>Qty </small> <span className="down" onclick="decreaseCount(event, this)">-</span>
                           <input type="text" defaultValue={1} />
                           <span className="up" onclick="increaseCount(event, this)">+</span> </div>
                       </div>
                       <div className="cart-btns"> <a className="category-view-btn cartbt" href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width={22} height="22.002" viewBox="0 0 22 22.002">
                             <path id="cart_icon" d="M14.386,20.31A1.693,1.693,0,1,1,16.078,22,1.692,1.692,0,0,1,14.386,20.31Zm-5.077,0A1.692,1.692,0,1,1,11,22,1.692,1.692,0,0,1,9.309,20.31ZM6.457,15.055l-2.208-8c-.006-.018-.013-.037-.018-.056L2.92,2.311a.847.847,0,0,0-.846-.618H.846A.846.846,0,1,1,.846,0H2.107A2.539,2.539,0,0,1,4.553,1.845L5.744,5.924H21.156a.84.84,0,0,1,.829,1l-1.439,7.921a2.539,2.539,0,0,1-2.5,2.081H8.906A2.539,2.539,0,0,1,6.457,15.055Zm1.65-.449a.845.845,0,0,0,.846.626h9.139a.846.846,0,0,0,.846-.694l1.2-6.922H6.2Z" fill="#fff" />
                           </svg>
                         </a> <a className="category-view-btn buynow1" href="#">Buy Now</a> </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div> 
             );

        })


      }
  </>
  
    
  )
}

export default Section_Popular_Product_Data