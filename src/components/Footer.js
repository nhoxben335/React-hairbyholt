import React from 'react';
import "../css/reset.css";
import "../css/footer.css";
import logo from "../images/instagram-logo.png";

const Footer = () => {
   return (
      <div id="footer" className="container-fluid">
         <div className="row">
            <div className="col-4">
            </div>
            <div className="col-4 text-center"><p>Hair by Taylor Holt</p></div>
            <div className="col-4 text-end">
               <a href="https://www.instagram.com/tayloranneholt/?utm_source=ig_embed"><img src={logo} className="float-right"/></a>
            </div>
         </div>
      </div>
   );
}

export default Footer;