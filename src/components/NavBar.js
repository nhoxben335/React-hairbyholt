import React from 'react';
import { Link } from 'react-router-dom';
import "../css/reset.css";
import "../css/navbar.css";
import icon from "../images/hamburger.png";

const NavBar = () => {
   return (
      <div id="nav">
         <nav className="navbar navbar-expand-lg">
            <div id="links" className="container-fluid">
                  <a className="navbar-brand"><Link to="" id="title">Hair By Holt</Link></a>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false">
                        <img src={icon} className="navbar-toggler-icon" alt=""/>
                     </button>
               <div className="collapse navbar-collapse justify-content-end" id="menu">
                  <ul id="linkItems" className="nav navbar-nav">
                     <li classname="nav-item"><Link to="/services" className="link">Services</Link></li>
                     <li classname="nav-item"><Link to="/contact" className="link">Contact</Link></li>
                     <li classname="nav-item"><Link to="/showcase" className="link">Showcase</Link></li>
                     <li classname="nav-item"><Link to="/about" className="link">About</Link></li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}

export default NavBar;