import React from "react";
import { useState } from "react";
import axios from "axios";

const Unsubscribe = () => {
    const [email, setEmail] = useState('');
    const [unsubscribed, setUnsubscribed] = useState('');
    const [success, setSuccess] = useState(false);
    
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
                    if (!res.data.deletedCount) {
//change alert to proper pop-up window?
                        alert(`${email} is not on our list`);
                        setSuccess(false);
                    }
                    else {
                        setUnsubscribed(email)
                        setSuccess(true);
                    }
                    setEmail('');

                })

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
            {success && 
            <div className="lead">
                {unsubscribed} has been succesfully removed from our list.
            </div>
            }

        </div>
    
     );
}
 
export default Unsubscribe;