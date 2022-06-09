import React, { useState  , useEffect} from "react";
import ItemsCarousel from "react-items-carousel";



const data =[
  { id : 1 , img : "images/Image-3.png" },
  { id : 2 , img : "images/Image-4.png" },
  { id : 3 , img : "images/Image-5.png" },
  { id : 4 , img : "images/Image-3.png" },
  { id : 5 , img : "images/Image-4.png" },
  { id : 6 , img : "images/Image-5.png" },
  { id : 7 , img : "images/Image-3.png" },
  { id : 1 , img : "images/Image-4.png" },
  { id : 2 , img : "images/Image-5.png" },
  { id : 3 , img : "images/Image-3.png" },
  { id : 4 , img : "images/Image-4.png" },
  { id : 5 , img : "images/Image-5.png" },
  { id : 6 , img : "images/Image-3.png" },
  { id : 7 , img : "images/Image-3.png" }
   

]



const SectionRasatvaIndiaCrousel = () => {
    const [active, setaAtive] = useState(0);
    const [num, setNum] = useState(5);


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
      className=""
        infiniteLoop={true}
        gutter={12}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={5}
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
            <div className="item" key={item.id}>
              <div className="post-banner">
                <img src={item.img} className="img-fluid" alt />
                <div className="post-views">
                  <div className="post-user-views">
                    <a href="#"><i className="fa fa-heart" aria-hidden="true" /> 10</a>
                    <a href="#"><i className="fa fa-comment" aria-hidden="true" /> 5</a>
                  </div>
                </div>
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

export default SectionRasatvaIndiaCrousel