 import React from 'react'
import LandingRecipeCrousel from './LandingRecipeCrousel'

const LandingRecipeSection = () => {
  return (
    <>
  <div className="recipe-section pt-0">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="heading-recipe p-0">
          <h2 className="product-featured-heading">Recipe / Uses</h2>
        </div>
      

<LandingRecipeCrousel/>


        
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default LandingRecipeSection