import React from "react";

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
 
const Navbar = () => {
  
  
  return (
   
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container-fluid">
          <HashLink className="navbar-brand" to="/#top"><span data-bs-toggle="collapse" data-bs-target="#navbarOptions"><i className="bi bi-tsunami"></i>WV River Surfing</span></ HashLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOptions" aria-controls="navbarOptions" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarOptions">
            <div className="navbar-nav">
              <HashLink className="nav-link" to="/#levels"><span data-bs-toggle="collapse" data-bs-target="#navbarOptions">Current Levels</span></HashLink>
              <HashLink className="nav-link" to="/#subscribe"><span data-bs-toggle="collapse" data-bs-target="#navbarOptions">Subscribe</span></HashLink>
              <Link className="nav-link" to="/unsubscribe"><span data-bs-toggle="collapse" data-bs-target="#navbarOptions">Unsubscribe</span></Link>
            </div>
          </div>
        </div>
      </nav>
    
  );
};
 
export default Navbar;