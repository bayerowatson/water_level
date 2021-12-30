import React from "react";

import { NavLink } from "react-router-dom";
 
const Navbar = () => {
  return (
   
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <NavLink className="navbar-brand" to="/">
      //     WV River Surfing
      //   </NavLink>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarSupportedContent"
      //     aria-controls="navbarSupportedContent"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
 
      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav ml-auto">
      //       <li className="nav-item">
      //         <NavLink className="nav-link" to="/subscribe">
      //           Subscribe
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink className="nav-link" to="/unsubscribe">
      //           Unsubscribe
      //         </NavLink>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">WV River Surfing</ NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOptions" aria-controls="navbarOptions" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarOptions">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Current Levels</NavLink>
              <NavLink className="nav-link" to="/subscribe">Subscribe</NavLink>
              <NavLink className="nav-link" to="/unsubscribe">Unsubscribe</NavLink>
            </div>
          </div>
        </div>
      </nav>
    
  );
};
 
export default Navbar;