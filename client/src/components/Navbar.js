import React from "react";

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
 
const Navbar = () => {
  
  
  return (
   
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container-fluid">
          <HashLink className="navbar-brand" to="/#top">
            <div data-bs-toggle="collapse" data-bs-target="#navbarOptions">
              <i className="bi bi-tsunami" /> WV River Surfing
            </div>
          </ HashLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOptions" aria-controls="navbarOptions" aria-expanded="false" aria-label="Toggle navigation">
            <i className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarOptions">
            <div className="navbar-nav">
              <HashLink className="nav-link p-0" to="/#levels">
                  <div className="p-1" data-bs-toggle="collapse" data-bs-target="#navbarOptions">
                    Current Levels
                  </div>
              </HashLink>
              <HashLink className="nav-link p-0" to="/#subscribe">
                <div className="p-1" data-bs-toggle="collapse" data-bs-target="#navbarOptions">
                  Subscribe
                </div>
              </HashLink>
              <Link className="nav-link p-0" to="/unsubscribe">
                <div className="p-1" data-bs-toggle="collapse" data-bs-target="#navbarOptions">
                  Unsubscribe
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    
  );
};
 
export default Navbar;