import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/carousel.css";

// https://react-slick.neostack.com/docs/example/center-mode
const Carousel = (props) => {
   const settings = {
      accessability: true,
      dots: true,
      centerMode: true,
      centerPadding: "60px",
      className: "center",
      draggable: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 300,
      swipe: true,
      swipeToSlide: true,
      variableWidth: true,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
               arrows: false,
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false,
               variableWidth: true,
               adaptiveHeight: true
           }
         }
      ]
   };

   return (
      <div id="carousel">
         <Slider {...settings}>
            {props.imageLocations.map((imageLocation) => {
                  return (<div><img key={imageLocation} src={imageLocation} /></div>);
            })}
         </Slider>
      </div>
   );
}

export default Carousel;