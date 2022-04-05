import React from 'react';
import "../css/reset.css";
import "../css/showcase.css";
import Footer from "./Footer";
import 'animate.css';
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from 'simple-react-lightbox'

const Showcase = (props) => {

   const options = {
      buttons: {
         showNextButton: false,
         showPrevButton: false,
         showAutoplayButton: false,
         showThumbnailsButton: false
      },
      thumbnails: {
         showThumbnails: false
      }

   }

   return (
      <div id="showcase">
         <div className="container-fluid" id="header">
            <h1>Showcase</h1>
         </div>
         <div className="container animate__animated animate__fadeIn animate__fast" id="content">
            <div className="row">
               {
                  props.imageLocations.map((imageLocation) => {
                     return (
                        <div className="col-lg-4">
                           <SimpleReactLightbox>
                                 <SRLWrapper options={options}>
                                    <a href={imageLocation}>
                                       <img className="d-block mx-auto" src={imageLocation} key={imageLocation} />
                                    </a>
                                 </SRLWrapper>      
                              </SimpleReactLightbox>
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