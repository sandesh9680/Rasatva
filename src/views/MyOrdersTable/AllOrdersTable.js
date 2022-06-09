import React from 'react'



const data =[
    { id : 1 , orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 2 , orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 3 , orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 4 , orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 5 , orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 6 , orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 7 , orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 8 , orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 9 , orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 10 ,orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 11, orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 12, orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 13, orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"},
    { id : 14, orderNo : "65875 "  , date : "14-04-2022 " , trackId : "IW323445792 " , quantity : "2 " , price : " ₹1500.00" , status : "Pending "  , button : " view Details"}
     
  
  ]


const AllOrdersTable = () => {
  return (
    <div className="table-responsive table-account">
          <table width="100%" border={0} className="table-order" cellSpacing={15} cellPadding={15}>
            <tbody><tr>
                <th scope="col">#Order No.</th>
                <th scope="col">Date</th>
                <th scope="col">Track ID</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">&nbsp;</th>
              </tr>

              {
                  data.map((item)=>{
                    return(
                        <tr key = {item.id}>
                                <td>{item.orderNo}</td>
                                <td>{item.date}</td>
                                <td>{item.trackId}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td><div className="deliverd btn btn-secondary btn-sm">{item.status}</div></td>
                                <td><a className="view-details-order btn btn-secondary btn-sm" href="#">{item.button}</a></td>
                        </tr>
                    );
                  })
              }
            </tbody></table>
        </div>
  )
}

export default AllOrdersTable