import React from 'react';
import { Link } from 'react-router-dom';
import "../css/reset.css";
import "../css/navbar.css";

const NavBar = () => {
   return (
      <nav>
         <Link to="">Max Morse</Link>
         <div id="links">
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
         </div>
      </nav>
   );
}

export default NavBar;