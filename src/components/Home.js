import React from 'react';
import "../css/reset.css";
import "../css/home.css";
import Carousel from './Carousel';

function Home() {
   return (
      <React.Fragment>
         <div id="home">
         <div id="section-1" className="container-fluid ps-0 pe-0">
              <h1>Hair by Holt</h1>
              <h4>Mobile hair stylist and barber</h4>
         </div>
            {/* <div id="section-1" className="container-fluid ps-0 pe-0">
               <img className="img-fluid w-100" src="https://picsum.photos/1400/600" />
            </div> */}
            <div id="section-2" className="container">
               <h1>Casual, Affirming, Professional</h1>
               <Carousel/>
            </div>
         </div>
      </React.Fragment>
   );
}

export default Home;

