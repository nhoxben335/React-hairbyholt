import React from 'react';
import "../css/reset.css";
import "../css/about.css";
import image from "../images/about4.png";
import Footer from "./Footer";

const About = () => {
   return (
      <div id="about">
         <div className="container-fluid" id="header">
            <h1>About</h1>
         </div>
         <div className="container" id="content">
            <div className="row">
               <div className="col-xl-7">
                  <div id="abouttitle">
                     <h1>About</h1>
                  </div>
                  <div id="paragraphcontainer">
                     <div id="paragraph">
                  <p>
                     I work as a self-employed Mobile Hair Stylist &amp; Barber, servicing 
                     the HRM. I am based in the North end of Halifax, delivering a wide 
                     range of services. I am dedicated to staying updated on current and 
                     trending cuts, styles and colours. My goal is to empower and uplift 
                     those in my community with high quality services at affordable 
                     prices. I am a gender non-conforming person, passionate about 
                     providing affirming styles. I prioritise being accessible, 
                     inclusive, and safe for all communities.
                  </p>
                  
                  <p id="discount">
                     * Discount provided for those impacted by low-income status or 
                     disability.
                  </p>
                  <div id="historytitle">
                     <h1>History</h1>

                  </div>
                  <p>
                     I’ve been passionate about hair design ever since I was a small child, 
                     growing up watching my aunt working as a hair stylist. I loved the 
                     atmosphere in her small salon beneath my grandparents’ take-out. The 
                     stylists were always uplifting, and clients always left smiling. In 
                     order to continue this tradition here in the HRM, I’ve decided to 
                     provide a mobile service for you to enjoy in the comfort of your own 
                     home.
                  </p>
                  <p>
                     I graduated top of my class from the Hair Design Centre in 2015, where 
                     I was awarded for my skill in almost every category. While still in 
                     school, I apprenticed at a high-end salon in Downtown Halifax for a 
                     few months before being hired as a General Hair Stylist. After working 
                     in this position for two years, I completed another apprenticeship at 
                     a barber shop in order to hone my craft and become a skilled barber. 
                     I have also invested in professional development through other 
                     in-salon training.
                  </p>
                  <p>
                     In addition to my work experience, I have also volunteered as a Hair 
                     Stylist in the 2016 NSCAD Fashion Show, 2016 NSCAD Wearable Arts Show, 
                     the 2016 &amp; 2017 Nocturne Halifax: Art at Night festival, the 2017 
                     Carnival of Beauty, and the 2017 Atlantic Wedding Showcase.
                  </p>
                  </div>
                  </div>
               </div>

               <div className="col-xl-5">
                  <img src={image} id="aboutimage"></img>
               </div>

            </div>


         </div>
         <Footer/>
      </div>
   );
}

export default About;