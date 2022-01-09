import React from "react";

const Footer = () => {
    let year =  new Date().getFullYear();

    return ( 
        
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col  mb-0 text-muted">&copy; {year} Bayer Watson</p>
        
        
            <ul className="nav col justify-content-end">
                <li className="nav-item">
                    <span className="nav-link px-2 text-muted fw-bold">Other Resources: </ span>
                </li>
                <li className="nav-item">
                    <a href="https://www.americanwhitewater.org/content/River/state-summary/state/WV/" className="nav-link px-2 text-muted" target="_blank">American Whitewater</a>
                </li>
                <li className="nav-item">
                    <a href="https://www.youtube.com/watch?v=WZm1FZACZKM" className="nav-link px-2 text-muted" target="_blank">Surfing the Gauley</a>
                </li>
                <li className="nav-item">
                    <a href="https://highland-outdoors.com/land-locked-river-surfing-west-virginia/" className="nav-link px-2 text-muted" target="_blank">Highland Outdoors</a>
                </li>
            </ul>
            </footer>
        </div>
     );
}
 
export default Footer;