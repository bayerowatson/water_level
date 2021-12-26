import React from "react";
import { useState } from "react";
import axios from "axios";

const Unsubscribe = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleDelete = (e) => {
//add logic to confirm delete        
        e.preventDefault();
        if (email) {
            axios
                .delete(`http://localhost:5000/subscriber/${email}`)
                .then(res => {
                    if (!res.data.deletedCount)

//change alert to error message in page

                    alert('this email is not on our list');
                    setEmail('');
                })
    //add logic display success or failure of delete

                .catch(err => console.log(err));
        }
    }

    return ( 
        <div>
            <div className="h1">
                Unsubscribe page
            </div>
            <form onSubmit={handleDelete}>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email address to unsubscribe</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail"
                        value={email}
                        onChange={handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary">Unsubscribe</button>
            </form>
        </div>
    
     );
}
 
export default Unsubscribe;