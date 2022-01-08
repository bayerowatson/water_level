import React from "react";

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
 
const Navbar = () => {
  return (
   
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <HashLink className="navbar-brand" to="/#top"><i className="bi bi-tsunami"></i>WV River Surfing</ HashLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOptions" aria-controls="navbarOptions" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarOptions">
            <div className="navbar-nav">
              <HashLink className="nav-link" to="/#levels">Current Levels</HashLink>
              <HashLink className="nav-link" to="/#subscribe">Subscribe</HashLink>
              <Link className="nav-link" to="/unsubscribe">Unsubscribe</Link>
            </div>
          </div>
        </div>
      </nav>
    
  );
};
 
export default Navbar;