import React from 'react';
import { Link } from 'react-router-dom';
import "../css/reset.css";
import "../css/navbar.css";

const NavBar = () => {
   return (
      <div id="nav">
         <navbar>
            <div id="links">
               <Link to="" id="title">Hair By Holt</Link>
               <Link to="/services" className="link">Services</Link>
               <Link to="/contact" className="link">Contact</Link>
               <Link to="/showcase" className="link">Showcase</Link>
               <Link to="/about" className="link">About</Link>
            </div>
         </navbar >
      </div>
   );
}

export default NavBar;