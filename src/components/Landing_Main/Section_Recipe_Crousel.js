import React, { useState  , useEffect} from "react";
import ItemsCarousel from "react-items-carousel";



const data =[
  { id : 1 , img : "images/turmeric2.svg" },
  { id : 2 , img : "images/turmeric2.svg" },
  { id : 3 , img : "images/turmeric2.svg" },
  { id : 4 , img : "images/turmeric2.svg" },
  { id : 5 , img : "images/turmeric2.svg" },
  { id : 6 , img : "images/turmeric2.svg" },
  { id : 7 , img : "images/turmeric2.svg" },
  { id : 1 , img : "images/turmeric2.svg" },
  { id : 2 , img : "images/turmeric2.svg" },
  { id : 3 , img : "images/turmeric2.svg" },
  { id : 4 , img : "images/turmeric2.svg" },
  { id : 5 , img : "images/turmeric2.svg" },
  { id : 6 , img : "images/turmeric2.svg" },
  { id : 7 , img : "images/turmeric2.svg" }
   

]



const Section_Recipe_Crousel = () => {
    const [active, setaAtive] = useState(0);
    const [num, setNum] = useState(3);


  useEffect(() => {
    let length = window.innerWidth ;


  if(length >= 1200){
    setNum(3);
    console.log( "testimonial_first" , length);
  }else if( length >= 994   && length <= 1200){
    setNum(2);
    console.log( "testimonial_second" ,length);

  }else if(length <= 993 && length >=300){
  setNum(1);
  console.log( "testimonial_third" ,length);
}
  }  ,[window.innerWidth]);






  return (
    <>
         <div className="App">
      

      <ItemsCarousel
      className="testimonial_main"
        infiniteLoop={true}
        gutter={12}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={num}
        // slidesToScroll={2}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={active}
        requestToChangeActive={value => setaAtive(value)}
        rightChevron={">"}
        leftChevron={"<"}
      >
         
       

        {
          data.map((item)=>{  
           return(
             <div className=" owl-theme recip-uses-carousle carousel-arrows explor-choose-slider" id="recipe-carousel">
           <div className="item" key={item.id}>
            <div className="exquisite-product">
              <div className="exquisite-icon"><span><img src={item.img} alt /></span></div>
              <h3>Turmeric Powder</h3>
              <p>Our Turmeric Powder is produced from handpicked turmeric roots. To preserve its piquant aroma...</p>
              <a className="category-view-btn" href="#">Shop Now &nbsp;&nbsp;<i className="fa fa-angle-right" aria-hidden="true" /></a> </div>
          </div>
           </div>
           );

          })
        }

        

      </ItemsCarousel>
    </div>
  
    </>
  )
}

export default Section_Recipe_Crousel