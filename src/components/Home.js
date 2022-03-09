import React from 'react';
import "../css/reset.css";
import "../css/home.css";
import Flickity from "flickity";


// <style>
// @import url('http://fonts.cdnfonts.com/css/al-ragas');
// </style>

const Home = () => {
   // const flickity = new Flickity("../images", {});

   return (
      <React.Fragment>
         <div id="section-1">
            <img src="https://picsum.photos/1400/600"/>
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

export default Home;