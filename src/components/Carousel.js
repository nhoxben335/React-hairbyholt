import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// https://react-slick.neostack.com/docs/example/center-mode
const Carousel = () => {
   const settings = {
      accessability: true,
      dots: true,
      centerMode: true,
      centerPadding: "60px",
      className: "center",
      draggable: true,
      focusOnSelect: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 300,
      swipe: true,
      swipeToSlide: true,
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