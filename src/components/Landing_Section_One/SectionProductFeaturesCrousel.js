import React, { useState , useEffect } from "react";
import ItemsCarousel from "react-items-carousel";


const data =[
  { id : 1 , img : "images/landing/safe_online_payment.svg" , head : "100% Secure Online Payment" },
  { id : 2 , img : "images/landing/shipping.svg" , head : "Shipping Worldwide" },
  { id : 3 , img : "images/landing/natural-products.svg" , head : "100% Natural Products" },
  { id : 4 , img : "images/landing/free-shipping.svg" , head : "Free Shipping above Rs.499" },
  { id : 5 , img : "images/landing/shipping.svg" , head : "Shipping Worldwide" },

]



function SectionProductFeaturesCrousel() {
  const [active, setaAtive] = useState(0);
  const [num, setNum] = useState(4);


  useEffect(() => {
    let length = window.innerWidth ;
  if(length >= 1200){
    setNum(3);
    console.log(length);
  }else if(length <= 500){
    setNum(2);
  }else if(length >= 501)
  setNum(3);
  }  ,[window.innerWidth]);


  return (
    <div className="App" style={{height:"132px"}}>
    

      <ItemsCarousel
        autoPlay
        infiniteLoop={true}
        gutter={12}
        timeout={1}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={num}
        slidesToScroll={2}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={active}
        requestToChangeActive={(value) => setaAtive(value)}
        rightChevron={"▶"}
        leftChevron={"◀"}
      >
      
         {
          data.map((item)=>{  
           return(
             <div className="recipe_item_cover">
           <div 
            key={item.id}
            className="recipe-item"
            style={{
              height: "380px",
              width:"400px", 
            }} >
            <div className="img_and_h6">
            <img src={item.img} alt="star"/>
             <h6 style={{width:"140px" , marginLeft:"20px"}}>{item.head}</h6>
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

export default SectionProductFeaturesCrousel;