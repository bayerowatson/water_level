import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Levels = () => {
    

    const [gauley, setGauley] = useState('loading...');
    const [dries, setDries] = useState('loading...');
    const [gauleyTime, setGauleyTime] = useState('');
    const [driesTime, setDriesTime] = useState('');


    const getLevels = () => {
        axios
            .get('http://localhost:5000/levels')
            .then(res => {
                setGauley(res.data.gauley.value + " ft.");
                setDries(res.data.dries.value + " ft.");
                setGauleyTime("Last updated: " + res.data.gauley.dateTime);
                setDriesTime("Last updated: " + res.data.dries.dateTime);

            })
            .catch(err => console.log(err));
    }

    useEffect(()=> {
        getLevels();
    }, [])
    
//https://i0.wp.com/highland-outdoors.com/wp-content/uploads/2019/10/688A8953.jpg?fit=2048%2C1365&ssl=1

    const bgStyle = {
        backgroundImage: 'url(/surfing_bg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      };

    return ( 
        <div className="pt-5" id="top">
            <div 
                style={bgStyle} 
                className="text-center d-flex flex-column justify-content-center text-white"
            >
                <h1 className="display-2 fw-bold">WV River Surfing</h1>
                <p className="lead">Providing daily email updates for river surfing water levels</p>
                <div>
                    <a href="#levels" className="btn btn-primary m-1">Current Water Levels</a>
                    <Link to="/subscribe"><button className="btn btn-primary m-1">Subscribe</button></Link>
                </div>

            </div>
            
            <div className="min-vh-100 d-flex flex-column justify-content-center" id="levels">
                <h1 className="text-center display-3 fw-bold">Current Water Levels</h1>
                <div className="lead mx-5">
                    <table className="table table-hover ">
                        <tbody>
                            <tr>
                                <td>Gauley below Summersville Dam</td>
                                <td>{gauley}</td>
                                <td>{gauleyTime}</td>
                            </tr>
                            <tr>
                                <td>New River Dries below Hawk's Nest Dam</td>
                                <td>{dries}</td>
                                <td>{driesTime}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                

            </div>
            
        </div>
    
     );
}
 
export default Levels;