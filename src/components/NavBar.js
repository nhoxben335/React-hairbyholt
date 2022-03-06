import React from 'react';
import { Link } from 'react-router-dom';
import "../css/reset.css";
import "../css/navbar.css";

const NavBar = () => {
   return (
      <nav>
         <Link to="">Hair By Holt</Link>
         <div id="links">
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/showcase">Showcase</Link>
            <Link to="/about">About</Link>
         </div>
      </nav>
   );
}

export default NavBar;