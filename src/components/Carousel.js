import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// https://react-slick.neostack.com/docs/example/center-mode
const Carousel = () => {
   const settings = {
      className: "center",
      centerMode: true,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 300
   };

   return (
      <div>
         <Slider {...settings}>
            <div>
               <img src={require('../images/azure-functions.png')}/>
            </div>
            <div>
               <img src={require('../images/azure.png')}/>
            </div>
            <div>
               <img src={require('../images/bootstrap.png')}/>
            </div>
            <div>
               <img src={require('../images/azure.png')}/>
            </div>
            <div>
               <img src={require('../images/azure-functions.png')}/>
            </div>
            <div>
               <img src={require('../images/bootstrap.png')}/>
            </div>
         </Slider>
      </div>
   );
}

export default Carousel;