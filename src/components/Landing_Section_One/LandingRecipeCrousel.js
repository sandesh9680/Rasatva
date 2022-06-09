import React, { useState , useEffect} from "react";
import ItemsCarousel from "react-items-carousel";



const data =[
    { id : 1 , img : "images/landing/recipe1.png" },
    { id : 2 , img : "images/landing/recipe2.png" },
    { id : 3 , img : "images/landing/recipe1.png" },
    { id : 4 , img : "images/landing/recipe2.png" },
    { id : 5 , img : "images/landing/recipe1.png" },
    { id : 6 , img : "images/landing/recipe2.png" },
    { id : 7 , img : "images/landing/recipe1.png" },
    { id : 1 , img : "images/landing/recipe2.png" },
    { id : 2 , img : "images/landing/recipe1.png" },
    { id : 3 , img : "images/landing/recipe2.png" },
    { id : 4 , img : "images/landing/recipe1.png" },
    { id : 5 , img : "images/landing/recipe2.png" },
    { id : 6 , img : "images/landing/recipe1.png" },
    { id : 7 , img : "images/landing/recipe2.png" }
     
  
  ]
  


function LandingRecipeCrousel() {
  const [active, setaAtive] = useState(0);
  const [num, setNum] = useState(3);


  useEffect(() => {
    let length = window.innerWidth ;


  if(length >= 801){
    setNum(3);
    console.log( " first" , length);
  }else if(length <= 800 && length >= 500){
    setNum(1);
    console.log( " second" ,length);

  }else if(length < 501){
  setNum(1);
  console.log( " third" ,length);
  } } ,[window.innerWidth]);




  return (
    <div className="App">
      

      <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={num}
        slidesToScroll={1}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={active}
        requestToChangeActive={(value) => setaAtive(value)}
        rightChevron={">"}
        leftChevron={"<"}
      >
      {
          data.map((item)=>{  
           return(
        <div className=" owl-theme recip-uses-carousle carousel-arrows" id="recipe-carousel">

            <div className="item" key = {item.id}>
            <div className="recipe-item recipe-use"><img  className="LandingRecipeCrousel_image" src={item.img} alt />
              <div className="recipe-btns my-auto">
                <p>Methi Mushroom | Mushroom Methi Curry</p>
              </div>
              </div>
            </div>
          </div>
           );

          })
        }
      </ItemsCarousel>
    </div>
  );
}

export default LandingRecipeCrousel;