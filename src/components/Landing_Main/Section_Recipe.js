import React from 'react'
import Section_Recipe_Crousel from './Section_Recipe_Crousel'

const Section_Recipe = () => {
  return (
   <div className="recipe-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="heading-recipe p-0 text-center">
          <h5 className="title-heading2">Explore &amp; Choose</h5>
          <h2 className="product-featured-heading">Exquisite spices &amp; seasoning</h2>
        </div>
         <Section_Recipe_Crousel/>
      </div>
    </div>
  </div>
</div>

  )
}

export default Section_Recipe