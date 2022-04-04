import React from 'react';
import "../css/reset.css";
import "../css/home.css";
import Carousel from './Carousel';
import Footer from "./Footer";

function Home() {
   return (
      <React.Fragment>
         <div id="home">
         <div id="section-1" className="container-fluid ps-0 pe-0">
              <h1>Studio Metamorphose</h1>
              <h4>Mobile hair stylist and barber</h4>
         </div>
            {/* <div id="section-1" className="container-fluid ps-0 pe-0">
               <img className="img-fluid w-100" src="https://picsum.photos/1400/600" />
            </div> */}
            <div id="section-2" className="container">
               <Carousel/>
               <h1>Casual, Affirming, Professional</h1>
            </div>
            <Footer/>
         </div>
      </React.Fragment>
   );
}

export default Home;

