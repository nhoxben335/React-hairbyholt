import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/carousel.css";

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
            {/* <div>
               <img src={require('../images/showcaseImages/b_1.jpg') }/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/co_1.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/ern_1.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/ja_1.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/josh_1.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/ka_1.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/ri_3.jpg')}/>
            </div> */}
            <div>
               <img src={require('../images/showcaseImages/1.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/2.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/3.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/4.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/5.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/6.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/7.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/8.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/9.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/10.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/11.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/12.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/13.jpg')}/>
            </div>
            <div>
               <img src={require('../images/showcaseImages/14.jpg')}/>
            </div>
         </Slider>
      </div>
   );
}

export default Carousel;