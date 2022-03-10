import React from 'react';
import "../css/reset.css";
import "../css/showcase.css";

const Showcase = () => {
   return (
      <div id="showcase">
         <h1>Showcase</h1>
         <div className="container">
            <div className="row">

               <div className="col-lg-4">
                     <img src={require('../images/showcaseImages/b_1.jpg') } className="img-fluid"/>
               </div>

               <div className="col-lg-4">
                     <img src={require('../images/showcaseImages/co_1.jpg')} className="img-fluid"/>
                  </div>

                  <div className="col-lg-4">
                     <img src={require('../images/showcaseImages/ern_1.jpg')} className="img-fluid"/>
                  </div>

                  <div className="col-lg-4">
                     <img src={require('../images/showcaseImages/ja_1.jpg')} className="img-fluid"/>
                  </div>

                  <div className="col-lg-4">
                     <img src={require('../images/showcaseImages/josh_1.jpg')} className="img-fluid"/>
                  </div>

                  <div className="col-lg-4">
                  
                     <img src={require('../images/showcaseImages/ka_1.jpg')} className="img-fluid"/>
                  </div>

                  <div className="col-lg-4">
                     <img src={require('../images/showcaseImages/ri_3.jpg')} className="img-fluid"/>
                  </div>

            </div>
         </div>
         
      </div>
   );
}

export default Showcase;