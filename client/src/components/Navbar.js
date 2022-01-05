import React from "react";

import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
 
const Navbar = () => {
  return (
   
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/#top">WV River Surfing</ Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOptions" aria-controls="navbarOptions" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarOptions">
            <div className="navbar-nav">
              <Link className="nav-link" to="/#levels">Current Levels</Link>
              <NavLink className="nav-link" to="/subscribe">Subscribe</NavLink>
              <NavLink className="nav-link" to="/unsubscribe">Unsubscribe</NavLink>
            </div>
          </div>
        </div>
      </nav>
    
  );
};
 
export default Navbar;