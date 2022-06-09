import React from 'react'
import SectionRecipeCrousel from './SectionRecipeCrousel'

const SectionRecipeSection = () => {
  return (
   <div className="recipe-section" style={{backgroundImage: 'url(images/landing/recipe-uses.png)'}}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="heading-recipe">
          <h2 className="product-featured-heading text-white">Recipe / Uses</h2>
        </div>
        <div className=" owl-theme carousel-arrows" id="recipe-use">



        <SectionRecipeCrousel/>

          {/* <div className="item">
            <div className="recipe-item"> <img src="images/landing/recipe1.png" alt />
              <div className="recipe-btns my-auto">
                <p>Methi Mushroom | Mushroom Methi Curry</p>
                <a className="btn shop-now-btn" href="#">READ MORE
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.135" height="17.415" viewBox="0 0 10.135 17.415">
                    <path id="arrow_right" d="M0,16,8,7.7,0,0" transform="translate(0.72 0.721)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </a> </div>
            </div>
          </div>
          <div className="item">
            <div className="recipe-item"> <img src="images/landing/recipe2.png" alt />
              <div className="recipe-btns my-auto">
                <p>Methi Mushroom | Mushroom Methi Curry</p>
                <a className="btn shop-now-btn" href="#">READ MORE
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.135" height="17.415" viewBox="0 0 10.135 17.415">
                    <path id="arrow_right" d="M0,16,8,7.7,0,0" transform="translate(0.72 0.721)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </a> </div>
            </div>
          </div>
          <div className="item">
            <div className="recipe-item"> <img src="images/landing/recipe1.png" alt />
              <div className="recipe-btns my-auto">
                <p>Methi Mushroom | Mushroom Methi Curry</p>
                <a className="btn shop-now-btn" href="#">READ MORE
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.135" height="17.415" viewBox="0 0 10.135 17.415">
                    <path id="arrow_right" d="M0,16,8,7.7,0,0" transform="translate(0.72 0.721)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </a> </div>
            </div>
          </div>
          <div className="item">
            <div className="recipe-item"> <img src="images/landing/recipe2.png" alt />
              <div className="recipe-btns my-auto">
                <p>Methi Mushroom | Mushroom Methi Curry</p>
                <a className="btn shop-now-btn" href="#">READ MORE
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.135" height="17.415" viewBox="0 0 10.135 17.415">
                    <path id="arrow_right" d="M0,16,8,7.7,0,0" transform="translate(0.72 0.721)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </a> </div>
            </div>
          </div>
          <div className="item">
            <div className="recipe-item"><img src="images/landing/recipe1.png" alt />
              <div className="recipe-btns my-auto">
                <p>Methi Mushroom | Mushroom Methi Curry</p>
                <a className="btn shop-now-btn" href="#">READ MORE
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.135" height="17.415" viewBox="0 0 10.135 17.415">
                    <path id="arrow_right" d="M0,16,8,7.7,0,0" transform="translate(0.72 0.721)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </a> </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SectionRecipeSection