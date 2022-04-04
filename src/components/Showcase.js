import React from 'react';
import "../css/reset.css";
import "../css/showcase.css";
import Footer from "./Footer";
import 'animate.css';

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
         <div className="container animate__animated animate__fadeIn animate__slow" id="content">
            <div className="row">
               {/* <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/1.jpg') } className="img-fluid"/>
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
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/15.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/16.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/17.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/18.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/19.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/20.jpg')} className="img-fluid"/>
               </div>
               <div className="col-lg-4">
                  <img src={require('../images/showcaseImages/21.jpg')} className="img-fluid"/>
               </div> */}
            </div>
         </div>
         <Footer/>
      </div>
   );
}

export default Showcase;