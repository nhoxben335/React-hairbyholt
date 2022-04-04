import React from 'react';
import "../css/reset.css";
import "../css/showcase.css";
import Footer from "./Footer";
import 'animate.css';

const Showcase = () => {
   function importAll(r) {
      return r.keys().map(r);
   }
   const imageLocations = importAll(require.context('../images/showcaseImages/', false, /\.(png|jpe?g|svg)$/));

   return (
      <div id="showcase">
         <div className="container-fluid" id="header">
            <h1>Showcase</h1>
         </div>
         <div className="container animate__animated animate__fadeIn animate__slow" id="content">
            <div className="row">
               {
                  imageLocations.map((imageLocation) => {
                     return (<img key={imageLocation} src={imageLocation}></img>);
                  })
               }
            </div>
         </div>
         <Footer/>
      </div>
   );
}

export default Showcase;