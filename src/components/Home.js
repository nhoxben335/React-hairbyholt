import React from 'react';
import "../css/reset.css";
import "../css/home.css";
import Flickity from "flickity";
import Slider from "react-slick";


function Home() {
   // const flickity = new Flickity("../images", {});
   return (
      <React.Fragment>
         <div id="section-1">
            <img src="https://picsum.photos/1400/600" />
         </div>
         <div id="section-2">
            <h1>Casual, Affirming, Professional</h1>
            <div class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true }'></div>
            <div class="flickity">
               <div class="image-cell"></div>
               <div class="image-cell"></div>
               <div class="image-cell"></div>
               <div class="image-cell"></div>
            </div>
         </div>
      </React.Fragment>
   );
}

// slider 
export default class CenterMode extends Component {
   render() {
     const settings = {
       className: "center",
       centerMode: true,
       infinite: true,
       centerPadding: "60px",
       slidesToShow: 3,
       speed: 500
     };
     return (
       <div>
         <h2>Center Mode</h2>
         <Slider {...settings}>
           <div>
             <h3>1</h3>
           </div>
           <div>
             <h3>2</h3>
           </div>
           <div>
             <h3>3</h3>
           </div>
           <div>
             <h3>4</h3>
           </div>
           <div>
             <h3>5</h3>
           </div>
           <div>
             <h3>6</h3>
           </div>
         </Slider>
       </div>
     );
   }
 }


export default Home;

