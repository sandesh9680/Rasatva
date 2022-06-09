import React, { useState  , useEffect} from "react";
import ItemsCarousel from "react-items-carousel";



const data =[
  { id : 1 , img : "images/landing/user.png" },
  { id : 2 , img : "images/landing/user.png" },
  { id : 3 , img : "images/landing/user.png" },
  { id : 4 , img : "images/landing/user.png" },
  { id : 5 , img : "images/landing/user.png" },
  { id : 6 , img : "images/landing/user.png" },
  { id : 7 , img : "images/landing/user.png" },
  { id : 1 , img : "images/landing/user.png" },
  { id : 2 , img : "images/landing/user.png" },
  { id : 3 , img : "images/landing/user.png" },
  { id : 4 , img : "images/landing/user.png" },
  { id : 5 , img : "images/landing/user.png" },
  { id : 6 , img : "images/landing/user.png" },
  { id : 7 , img : "images/landing/user.png" }
   

]



const SectionTestimonialCrouser = () => {
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
         <div className="">
      

      <ItemsCarousel
      className="testimonial_main"
        infiniteLoop={true}
        gutter={12}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={num}
        // slidesToScroll={0}
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
           <div 
            key={item.id}
            className="testimonial-item"
            >
             <h2>Sed iaculis elit ligula, et malesuada augue imperdiet.</h2>
             <p>Etiam mattis mattis magna eu ornare. Mauris aliquam, urna id malesuada ullamcorper, magna.</p>
             <img src={item.img} alt="star"/>
             <h6>Jhon Smith</h6>
           </div>
           );

          })
        }
      </ItemsCarousel>
    </div>
  
    </>
  )
}

export default SectionTestimonialCrouser