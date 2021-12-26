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
    
    return ( 
        <div>
            <div className="h1">
                Levels page
            </div>
            <div className="lead">{JSON.stringify(levels)}</div>
        </div>
    
     );
}
 
export default Levels;