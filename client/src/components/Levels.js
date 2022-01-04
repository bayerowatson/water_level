import React, { useEffect, useState } from "react";
import axios from "axios";

const Levels = () => {
    
    
    const [levels, setLevels] = useState("loading...");

    const getLevels = () => {
        axios
            .get('http://localhost:5000/levels')
            .then(res => {
                console.log(res.data);
                setLevels(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(()=> {
        getLevels();
    }, [])
    
//https://i0.wp.com/highland-outdoors.com/wp-content/uploads/2019/10/688A8953.jpg?fit=2048%2C1365&ssl=1

    const bgStyle = {
        backgroundImage: 'url(/surfing_bg.jpg',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      };

    return ( 
        <div>
            <div style={bgStyle} className="text-center d-flex flex-column justify-content-center text-white">
                <h1 className="display-2 fw-bold">WV River Surfing</h1>
                <p className="lead">Providing daily email updates for river surfing water levels</p>
                <div>
                    <a href="#levels" className="btn btn-primary m-1">Current Water Levels</a>
                    <a href="/subscribe" className="btn btn-primary m-1">Subscribe</a>
                </div>

            </div>
            
            <div className="lead" id="levels">{JSON.stringify(levels)}</div>
            
        </div>
    
     );
}
 
export default Levels;