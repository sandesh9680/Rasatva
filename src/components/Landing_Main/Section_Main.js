import React from 'react'

const data = [
  { id: 1, name: "Spices ", para: "Spices are essentials for every kitchen. Right from the growing to the grinding and packing... ", img: "images/spices.png ", quantity: "2 ", price: " ₹1500.00", status: "Pending ", button: " view Details" },
  { id: 2, name: "Wellness ", para: "Spices are essentials for every kitchen. Right from the growing to the grinding and packing... ", img: "images/wellness.png ", quantity: "2 ", price: " ₹1500.00", status: "Pending ", button: " view Details" },
  { id: 3, name: "Good Foods ", para: "Spices are essentials for every kitchen. Right from the growing to the grinding and packing... ", img: "images/good-foods.png ", quantity: "2 ", price: " ₹1500.00", status: "Pending ", button: " view Details" },
  { id: 4, name: "Signature ", para: "Spices are essentials for every kitchen. Right from the growing to the grinding and packing... ", img: "images/signature.png ", quantity: "2 ", price: " ₹1500.00", status: "Pending ", button: " view Details" },
  { id: 5, name: "Combos ", para: "Spices are essentials for every kitchen. Right from the growing to the grinding and packing... ", img: "images/Combos.png ", quantity: "2 ", price: " ₹1500.00", status: "Pending ", button: " view Details" },
  { id: 5, name: "Kitchen Essentials ", para: "Spices are essentials for every kitchen. Right from the growing to the grinding and packing... ", img: "images/Kitchen-essentials.png ", quantity: "2 ", price: " ₹1500.00", status: "Pending ", button: " view Details" },

]

const Section_Main = () => {
  return (
    <section className="category_products">
      <div className="container">
        <div className="row">
          {
            data.map((item) => {
              return (<>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="product_spices">
                    <h2 className="product-category-heading">{item.name}</h2>
                    <p>{item.para}</p>
                    <div className="category-footer">
                      <div className="category-btns my-auto"> <a className="category-view-btn" href="#">View all &nbsp;&nbsp;<i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
                      <div className="category-product-img"> <img src={item.img} className="img-fluid" alt /> </div>
                    </div>
                  </div>
                </div>
              </>);
            })
          }
        </div>
      </div>
    </section>

  )
}

export default Section_Main