import React from 'react';
import "../css/reset.css";
import "../css/home.css";
import Carousel from './Carousel';
import Footer from "./Footer";
import 'animate.css';

function Home() {
   return (
      <React.Fragment>
         <div id="home">
         <div id="section-1" className="container-fluid ps-0 pe-0">
              <h1>Studio Metamorphose</h1>
              <h4>Mobile hair stylist and barber</h4>
         </div>
            <div id="section-2" className="container animate__animated animate__fadeIn animate__slow">
               <Carousel/>
               <h1>Casual, Affirming, Professional</h1>
               <p>
                  Studio Métamorphose’s mission is to empower LGBTQ people by 
                  providing unique and personalized hairstyles and makeovers 
                  that allows them to express themselves in a creative way, in 
                  an environment that is inclusive, safe, and accommodative for 
                  individuals who struggle with sensory overstimulation.
               </p>
            </div>
            <Footer/>
         </div>
      </React.Fragment>
   );
}

export default Home;

