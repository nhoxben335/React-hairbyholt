import React from 'react';
import { Link } from 'react-router-dom';
import "../css/reset.css";
import "../css/navbar.css";
import icon from "../images/hamburger.svg";
import logo from "../images/instagram-logo.png";

const NavBar = () => {
   return (
      <div id="nav">
         <nav className="navbar navbar-expand-lg">
            <div id="links" className="container-fluid">
                  <a className="navbar-brand"><Link to="" id="title">Studio Metamorphose</Link></a>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false">
                        <img src={icon} className="navbar-toggler-icon" alt=""/>
                     </button>
               <div className="collapse navbar-collapse justify-content-end" id="menu" data-bs-toggle="collapse" data-bs-target="#menu">
                  <ul id="linkItems" className="nav navbar-nav">
                     {/* <li classname="nav-item"><Link to="/services" className="link">Services</Link></li> */}
                     <Link to="/contact"><li classname="nav-item"><span data-bs-toggle="collapse" data-bs-target="#menu" className="link link-green">Contact</span></li></Link>
                     <Link to="/showcase"><li classname="nav-item"><span data-bs-toggle="collapse" data-bs-target="#menu" className="link link-blue">Showcase</span></li></Link>
                     <Link to="/about"><li classname="nav-item"><span data-bs-toggle="collapse" data-bs-target="#menu" className="link link-pink">About</span></li></Link>
                     <li classname="nav-item"><a href="https://www.instagram.com/tayloranneholt/?utm_source=ig_embed"><img src={logo} id="instagram"/></a></li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}

export default NavBar;