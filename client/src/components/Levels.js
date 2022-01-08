
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
        <div className="min-vh-100 d-flex flex-column justify-content-center" id="levels">
            <h1 className="text-center display-4 fw-bold">Current Water Levels</h1>
            <div className="fs-4 m-5">
                <table className="table table-hover ">
                    <tbody>
                        <tr>
                            <td>Gauley below Summersville Dam</td>
                            <td>{gauley}</td>
                            <td className="fs-5 align-bottom">{gauleyDateTime}</td>
                        </tr>
                        <tr>
                            <td>New River Dries below Hawk's Nest Dam</td>
                            <td>{dries}</td>
                            <td className="fs-5 align-bottom">{driesDateTime}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default Levels;