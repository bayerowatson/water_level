
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Levels = () => {

    const [gauley, setGauley] = useState('loading...');
    const [dries, setDries] = useState('loading...');
    const [gauleyDateTime, setGauleyDateTime] = useState('');
    const [driesDateTime, setDriesDateTime] = useState('');
    

    const getLevels = () => {
        axios
            .get('http://localhost:5000/levels')
            .then(res => {
                setGauley(res.data.gauley.value + " ft.");
                setDries(res.data.dries.value + " ft.");
                let gauleyDT = new Date(res.data.gauley.dateTime);
                let driesDT = new Date(res.data.dries.dateTime);
                setGauleyDateTime("Last Updated: " + gauleyDT.toTimeString());
                setDriesDateTime("Last Updated: " + driesDT.toTimeString());

            })
            .catch(err => console.log(err));
    }

    useEffect(()=> {
        getLevels();
    }, [])
    

    return ( 
        <div className="container min-vh-100 d-flex flex-column justify-content-center mt-5 mt-md-0 " id="levels">
            <h1 className="text-center h1 py-2 py-md-4">Current Water Levels</h1>
            <div className="d-none d-md-block">
                <div className="">
                    <div className="row">
                        <div className="col">
                            <img src="/gauley_fall.jpg" className="img-fluid" alt="gauley river fall" />
                        </div>
                        <div className="col">
                            <img src="/canyon_doors.jpg" className="img-fluid" alt="canyon doors surfer" />
                        </div>
                        <div className="col">
                            <img src="/new_summer.jpg" className="img-fluid" alt="new river gorge summer" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide container d-md-none" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="/canyon_doors.jpg" className="d-block w-100 img-fluid" alt="canyon doors surfer" />
                    </div>
                    <div className="carousel-item">
                    <img src="/gauley_fall.jpg" className="d-block w-100 img-fluid" alt="gauley river fall" />
                    </div>
                    <div className="carousel-item">
                    <img src="/new_summer.jpg" className="d-block w-100 img-fluid" alt="new river gorge summer" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="m-5">
                <table className="table table-hover ">
                    <tbody>
                        <tr>
                            <td>Gauley below Summersville Dam</td>
                            <td>{gauley}</td>
                            <td><small>{gauleyDateTime}</small></td>
                        </tr>
                        <tr>
                            <td>New River Dries below Hawk's Nest Dam</td>
                            <td>{dries}</td>
                            <td><small>{driesDateTime}</small></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default Levels;