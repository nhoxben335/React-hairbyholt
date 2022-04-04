import React from 'react';
import "../css/reset.css";
import "../css/about.css";
import image from "../images/about4.png";
import Footer from "./Footer";
import 'animate.css';

const About = () => {
   return (
      <div id="about">
         <div className="container-fluid" id="header">
            <h1>About</h1>
         </div>
         <div className="container" id="content">
            <div className="row">
               <div className="col-xl-7">
                  {/* <p className='about-paragraph'>
                     <div id="aboutTitle">
                        <h1>Vision</h1>
                     </div>
                     Studio Métamorphose’s mission is to empower LGBTQ people by providing 
                     unique and personalized hairstyles and makeovers that allows 
                     them to express themselves in a creative way, in an 
                     environment that is inclusive, safe, and accommodative for 
                     individuals who struggle with sensory overstimulation.
                     <br></br>
                     <br></br>
                     <p id="discount">
                     * Discounts provided for those impacted by low-income status or 
                     disability.
                     </p>
                  </p> */}
               </div>
               <div className="col-xl-5 animate__animated animate__fadeIn animate__slow">
                  <img src={image} id="aboutImage"></img>
               </div>
            </div>
            <div className="row">
               <ul className="objectives-list">
                  <div id="objectivesTitle">
                     <h1>Objectives</h1>
                  </div>
                  <li>Providing a safe and comfortable space for LGBTQ individuals in an intimate one-chair salon environment.</li>
                  <li>Empowering individuals express themselves through their appearance and desired aesthetic. </li>
                  <li>Setting an industry standard for accommodating and empathetic  hair and beauty services for queer and non-binary individuals.</li>
                  <li>Educating and empowering the LGBTQ community and inspiring entrepreneurs who want to be in charge of their own career.</li>
                  
                  <br></br>
                  <br></br>
                  I’ve been passionate about hair design ever since I was a small child, 
                  growing up watching my aunt working as a hair stylist. I loved the 
                  atmosphere in her small salon beneath my grandparents’ take-out. The 
                  stylists were always uplifting, and clients always left smiling. In 
                  order to continue this tradition here in the HRM, I’ve decided to 
                  provide a mobile service for you to enjoy in the comfort of your own 
                  home.
                  <br></br>
                  <br></br>
                  I graduated top of my class from the Hair Design Centre in 2015, where 
                  I was awarded for my skill in almost every category. While still in 
                  school, I apprenticed at a high-end salon in Downtown Halifax for a 
                  few months before being hired as a General Hair Stylist. After working 
                  in this position for two years, I completed another apprenticeship at 
                  a barber shop in order to hone my craft and become a skilled barber. 
                  I have also invested in professional development through other 
                  in-salon training.
                  <br></br>
                  <br></br>
                  In addition to my work experience, I have also volunteered as a Hair 
                  Stylist in the 2016 NSCAD Fashion Show, 2016 NSCAD Wearable Arts Show, 
                  the 2016 &amp; 2017 Nocturne Halifax: Art at Night festival, the 2017 
                  Carnival of Beauty, and the 2017 Atlantic Wedding Showcase.
               </ul>
            </div>
         </div>
         <Footer/>
      </div>
   );
}

export default About;