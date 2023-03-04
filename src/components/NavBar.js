import React from 'react';
import { Link } from 'react-router-dom';
import "../css/reset.css";
import "../css/navbar.css";
import icon from "../images/hamburger.svg";
import logo from "../images/Instagram_Glyph_Gradient_RGB.png";

const NavBar = () => {
   return (
      <div id="nav">
         <nav className="navbar navbar-expand-lg">
            <div id="links" className="container-fluid">
                  <a className="navbar-brand" ><Link to="" id="title"><span  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Studio Metamorphose</span></Link></a>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false">
                        <img src={icon} className="navbar-toggler-icon" alt=""/>
                     </button>
               <div className="collapse navbar-collapse justify-content-end" id="menu">
                  <ul id="linkItems" className="nav navbar-nav">
                     <li className="nav-item"><Link to="/about" className="link link-pink"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</span></Link></li>
                     <li className="nav-item"><Link to="/showcase" className="link link-blue"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Showcase</span></Link></li>
                     <li className="nav-item"><Link to="/contact" className="link link-green"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</span></Link></li>

                     <li class="nav-item"><a href="https://www.instagram.com/tayloranneholt/?utm_source=ig_embed"><img src={logo} id="instagram" class="img-fluid"/></a></li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}

export default NavBar;