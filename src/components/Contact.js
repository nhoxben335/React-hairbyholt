import React from 'react';
import "../css/reset.css";
import "../css/contact.css";
import Footer from "./Footer";
import 'animate.css';

const Contact = () => {
   return (
      <div id="contact">
         <div className="container-fluid" id="header">
            <h1>Contact</h1>
         </div>
         <div className="container" id="content">
            <div className="row">
               <div className="col-xl-6 contactmap animate__animated animate__fadeIn animate__slow">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.169096942675!2d-73.58325068423157!3d45.526802637284746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bd07be304dd%3A0xa365c8b7482ac32b!2s4517%20St%20Andre%20St%2C%20Montreal%2C%20QC%20H2J%202Z8!5e0!3m2!1sen!2sca!4v1647793093438!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowfullscreen="" 
                  loading="eager">
                  </iframe>
               </div>
               <div className="col-xl-6 contact" id="contact-info">
                  <div className="row text-center" id="phone-section">
                     <div className='col-12'>

                        <a id="phone" href="tel:9027890464">(902)789-0464</a>
                        <p>4517 St Andre St</p>
                     </div>
                  </div>
                  <div className="row" id="contact-section">
                     <div className="col-md-6" id="hours">
                        <table>
                           <thead className="border-bottom">Hours</thead>
                           <tr>
                              <td>Mon-Tues</td>
                              <td>Closed</td>
                           </tr>
                           <tr>
                              <td>Wed-Sun</td>
                              <td>10AM-8PM</td>
                           </tr>
                        </table>
                     </div>
                     <div className="col-md-6" id="rate">
                        <p>
                           $80/hour rate- or pay what you can.
                           <br></br>
                           Must book appointment.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer/>
      </div>
   );
}

export default Contact;