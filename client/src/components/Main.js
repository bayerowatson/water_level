import React from "react";

const Main = () => {

//https://i0.wp.com/highland-outdoors.com/wp-content/uploads/2019/10/688A8953.jpg?fit=2048%2C1365&ssl=1

    const bgStyle = {
        backgroundImage: 'url(/surfing_bg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
      };

    return ( 
        <div id="top">
            <div 
                style={bgStyle} 
                className="text-center d-flex flex-column justify-content-center text-white"
            >
                <h1 className="display-3 fw-bold">WV River Surfing</h1>
                <p className="lead">Providing email updates for river surfing water levels</p>
                <div>
                    <a href="#levels" className="btn btn-primary m-1">Current Water Levels</a>
                    <a href="#subscribe" className="btn btn-primary m-1">Subscribe</a>
                    
                </div>
            </div> 
        </div>
    
     );
}
 
export default Main;