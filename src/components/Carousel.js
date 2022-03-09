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
               <img src={require('../images/showcaseImages/b_1.jpg')}/>
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
            </div>
         </Slider>
      </div>
   );
}

export default Carousel;