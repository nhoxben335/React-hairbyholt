import React from 'react';
import "../css/reset.css";
import "../css/showcase.css";
import Footer from "./Footer";

function importAll(r) {
   return r.keys().map(r);
}
 
const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

const Showcase = () => {
   return (
      <div id="showcase">
         <div className="container-fluid" id="header">
            <h1>Showcase</h1>
         </div>
         <div className="container" id="content">
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
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/1.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/2.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/3.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/4.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/5.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/6.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/7.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/8.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/9.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/10.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/11.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/12.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/13.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/14.jpg')} className="img-fluid"/>
               </div>
            </div>
         </div>
         <Footer/>
      </div>
   );
}

export default Showcase;