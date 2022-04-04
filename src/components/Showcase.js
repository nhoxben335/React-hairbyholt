import React from 'react';
import "../css/reset.css";
import "../css/showcase.css";
import Footer from "./Footer";
import 'animate.css';
import { useState, useEffect } from "react";

const Showcase = () => {

   function importAll(r) {
      return r.keys().map(r);
   }
   const imageLocations = importAll(require.context('../images/showcaseImages/', false, /\.(png|jpe?g|svg)$/));
   console.log(imageLocations);

   // const [images, setImages] = useState(0);
   // useEffect(() => {
   //    console.log(images);
   // }, []);

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