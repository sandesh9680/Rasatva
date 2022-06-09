import React from 'react'


const data =[
    { id : 1 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},
    { id : 2 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},
    { id : 3 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},
    { id : 4 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},
    { id : 5 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},
    { id : 6 , para : "Rabodi – Premium (Whole Wheat Bits) "  , small : "Added on: April 15, 2022 " , trackId : "IW323445792 " , quantity : "2 " , price : "  ₹339.00" , status : "Pending "  , button : " view Details"},

  ]

const PointsLowerData = () => {
  return (
 

 <>
{
    data.map((item)=>{
      return(
        <tr key = {item.id}>
    <td><div className="product-imgand-heading">
        <div className="primg"> <img src="images/Image-5.png" className="img-fluid" alt /> </div>
        <div className="wishlidt-order-heading">
          <p>{item.para}</p>
          <small>{item.small}</small> </div>
      </div></td>
    <td><span className="price-del"><del>{item.price}</del></span> ₹269.00</td>
    <td><div className="deliverd btn btn-secondary btn-sm">In Stock</div></td>
    <td><img src="images/coin2.svg" alt /> 50</td>
    <td><div className="cart-btns"><a className="category-view-btn buynow1" href="#">GET</a> </div></td>
  </tr>
      );
    })
}
</>



  )
}

export default PointsLowerData