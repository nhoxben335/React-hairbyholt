import React from 'react';
import "../css/reset.css";
import "../css/home.css";
import Flickity from "flickity";

const Home = () => {
   const flickity = new Flickity("", {});
   
   return (
      <React.Fragment>
         <div id="section-1">
            <img src="https://picsum.photos/1400/600"/>
         </div>
         <div id="section-2">
            <h1>Casual, Affirming, Professional</h1>
         </div>
      </React.Fragment>
   );
}

export default Home;