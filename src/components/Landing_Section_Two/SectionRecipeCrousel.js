import React, { useState , useEffect } from "react";
import ItemsCarousel from "react-items-carousel";



const data =[
  { id : 1 , img : "images/landing/recipe1.png" },
  { id : 2 , img : "images/landing/recipe1.png" },
  { id : 3 , img : "images/landing/recipe1.png" },
  { id : 4 , img : "images/landing/recipe1.png" },
  { id : 5 , img : "images/landing/recipe1.png" },
  { id : 6 , img : "images/landing/recipe1.png" },
  { id : 7 , img : "images/landing/recipe1.png" },
  { id : 1 , img : "images/landing/recipe1.png" },
  { id : 2 , img : "images/landing/recipe1.png" },
  { id : 3 , img : "images/landing/recipe1.png" },
  { id : 4 , img : "images/landing/recipe1.png" },
  { id : 5 , img : "images/landing/recipe1.png" },
  { id : 6 , img : "images/landing/recipe1.png" },
  { id : 7 , img : "images/landing/recipe1.png" }
   

]



const SectionRecipeCrousel = () => {
    const [active, setaAtive] = useState(0);
    const [num, setNum] = useState(4);


    useEffect(() => {
      let length = window.innerWidth ;
  
  
    if(length >= 801){
      setNum(2);
      console.log( " first" , length);
    }else if(length <= 800 && length >= 500){
      setNum(1);
      console.log( " second" ,length);
  
    }else if(length < 501){
    setNum(1);
    console.log( " third" ,length);
    } } ,[window.innerWidth]);


  return (
    <>
         <div className="App">
      

      <ItemsCarousel
      className="recipe_main"
        infiniteLoop={false}
        gutter={12}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={num}
        slidesToScroll={0}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={active}
        requestToChangeActive={value => setaAtive(value)}
        rightChevron={">"}
        leftChevron={"<"}
      >
        {/* {Array.from(new Array(10)).map((_, i) => (
          <div
            key={i}
            style={{
              height: 200,
              background: "url(https://placeimg.com/380/200/nature)"
            }}
          />
        ))} */}




        {
          data.map((item)=>{  
           return(
             <div className="recipe_item_cover">
           <div  key={item.id} className="recipe-item" >
            <img className="Recipe_item_image" src={item.img} alt="star"/>
            <div className="head_and_btn">
             <h2>Methi Mushroom | Mushroom Methi Curry</h2>
             <button>READ ME </button>
             </div>
           </div>
           </div>
           )

          })
        }


      </ItemsCarousel>
    </div>
  
    </>
  )
}

export default SectionRecipeCrousel