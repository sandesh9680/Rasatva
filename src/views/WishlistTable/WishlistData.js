import React from 'react'


const data =[
    { id : 1 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},
    { id : 2 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},
    { id : 3 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},
    { id : 4 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},
    { id : 5 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},

  ]

const WishlistData = () => {
  return (
<>
{
    data.map((item)=>{
      return(
        <tr key={item.id}>
        <td><a className="trash-btn" href="#"><i className="fa fa-trash" aria-hidden="true" /></a></td>
        <td>
          <div className="product-imgand-heading">
            <div className="primg">
              <img src="images/Image-5.png" className="img-fluid" alt />
            </div>
            <div className="wishlidt-order-heading">
              <p>{item.para}</p>
              <small>{item.small}</small>
            </div>
          </div></td>
        <td><span className="price-del"><del>{item.price}</del></span> ₹269.00</td>
        <td><div className="deliverd btn btn-secondary btn-sm">In Stock</div></td>
        <td><div className="cart-btns"> <a className="category-view-btn cartbt" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width={22} height="22.002" viewBox="0 0 22 22.002">
                <path id="cart_icon" d="M14.386,20.31A1.693,1.693,0,1,1,16.078,22,1.692,1.692,0,0,1,14.386,20.31Zm-5.077,0A1.692,1.692,0,1,1,11,22,1.692,1.692,0,0,1,9.309,20.31ZM6.457,15.055l-2.208-8c-.006-.018-.013-.037-.018-.056L2.92,2.311a.847.847,0,0,0-.846-.618H.846A.846.846,0,1,1,.846,0H2.107A2.539,2.539,0,0,1,4.553,1.845L5.744,5.924H21.156a.84.84,0,0,1,.829,1l-1.439,7.921a2.539,2.539,0,0,1-2.5,2.081H8.906A2.539,2.539,0,0,1,6.457,15.055Zm1.65-.449a.845.845,0,0,0,.846.626h9.139a.846.846,0,0,0,.846-.694l1.2-6.922H6.2Z" fill="#fff" />
              </svg>
            </a> <a className="category-view-btn buynow1" href="#">Buy Now</a> </div></td>
      </tr>
      );
    })
}
</>
  )
}

export default WishlistData