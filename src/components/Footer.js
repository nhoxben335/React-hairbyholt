import React from 'react';
import "../css/reset.css";
import "../css/footer.css";
import logo from "../images/Instagram_Glyph_Gradient_RGB.png";

const Footer = () => {
   return (
      <div id="footer" className="container-fluid">
         <div className="row">
            <div className="col-4">
            </div>
            <div className="col-4 text-center"><p>Studio Métamorphose</p></div>
            <div className="col-4 text-end">
               <a href="https://www.instagram.com/tayloranneholt/?utm_source=ig_embed"><img src={logo} className="float-right"/></a>
            </div>
         </div>
         <script>https://brusheezy.com/%22%3EBrusheezy</script>
      </div>
   );
}

export default Footer;