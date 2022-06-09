import React, { useState  , useEffect} from "react";
import ItemsCarousel from "react-items-carousel";



const data =[
  { id : 1 , img : "images/user5.png" },
  { id : 2 , img : "images/user5.png" },
  { id : 3 , img : "images/user5.png" },
  { id : 4 , img : "images/user5.png" },
  { id : 5 , img : "images/user5.png" },
  { id : 6 , img : "images/user5.png" },
  { id : 7 , img : "images/user5.png" },
  { id : 1 , img : "images/user5.png" },
  { id : 2 , img : "images/user5.png" },
  { id : 3 , img : "images/user5.png" },
  { id : 4 , img : "images/user5.png" },
  { id : 5 , img : "images/user5.png" },
  { id : 6 , img : "images/user5.png" },
  { id : 7 , img : "images/user5.png" }
   

]



const SectionHappyClientCrousel = () => {
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
      className=""
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
      <div className="our-client-carousel">
            <div className=" owl-theme testimonialarrow carousel-arrows arrow-bottom" id="testimonial-carousel2">
            <div className="item" key={item.id}>
              <div className="testimonial-item"> 
                <div className="client-profile">
                  <img src={item.img} alt />
                </div>
                <div className="quotes-icon"><img src="images/quotes.png" alt /></div>
                <h6>Lorem ipsum dolor sit amet, consectetur.</h6>
                <p>Proin lobortis velit turpis, a tempor ipsum tempus et. Curabitur nec ipsum sed nibh molestee.</p>
                <div className="client-name d-flex justify-content-between">
                  <div>
                    <h6>Sandeep Maheshwari</h6>
                    <small>wholesale merchant</small>
                  </div>
                  <div className="review-star-right">
                    <div className="star-review"> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star" aria-hidden="true" /></span> <span><i className="fa fa-star-o" aria-hidden="true" /></span> </div>
                  </div>
                </div>
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

export default SectionHappyClientCrousel