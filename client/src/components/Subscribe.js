import { useState } from "react";
import React from "react";
import axios from "axios";

const Subscribe = () => {
    const [newSubscriber, setNewSubscriber] = useState('');

    const handleChange = (e) => {
        setNewSubscriber(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newSubscriber) {
            //add logic to check if email is invalid or already exists in DB
            axios
                .post('http://localhost:5000/subscribers', {email: newSubscriber})
                .then((res) => {
                    setNewSubscriber('');
                })
                .catch (err => console.log(err))
        }
    }

    return ( 
        <div>
            <div className="h1">
                Subscribe page
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail" 
                        value={newSubscriber}
                        onChange={handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>

        </div>
    
     );
}
 
export default Subscribe;