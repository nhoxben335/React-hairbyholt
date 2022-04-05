import React from 'react';
import "../css/reset.css";
import "../css/showcase.css";
import Footer from "./Footer";
import 'animate.css';
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

const Showcase = (props) => {
   // const [zoomed, setZoomed] = React.useState(false);

   return (
      <div id="showcase">
         <div className="container-fluid" id="header">
            <h1>Showcase</h1>
         </div>
         <div className="container animate__animated animate__fadeIn animate__slow" id="content">
            <div className="row">
               {
                  props.imageLocations.map((imageLocation) => {
                     return (
                        <div className="col-lg-4">
                           <img className="d-block mx-auto" src={imageLocation} key={imageLocation} />
                        </div>
                     );
                  })
               }
            </div>
         </div>
         <Footer/>
      </div>
   );
}

export default Showcase;