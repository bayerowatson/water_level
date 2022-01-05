import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Subscribe = () => {
    const [newSubscriber, setNewSubscriber] = useState('');
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setNewSubscriber(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newSubscriber) {
            axios
                .get(`http://localhost:5000/subscriber/${newSubscriber}`)
                .then((res) => {
                    if (!res.data) {
                        axios
                        .post('http://localhost:5000/subscriber', {email: newSubscriber})
                        .then((res) => {
                            setEmail(newSubscriber);
                            setSuccess(true);
                        })
                        .catch (err => console.log(err))
                    }
                    else {
                        setSuccess(false);

//change alert to proper pop-up window?                        
                        alert(`${email} is already on our list!`)
                    }
                    setNewSubscriber('');
                })
                .catch (err => console.log(err))

        }
    }

    return ( 
        <div className="pt-5 mx-5">
            <div className="h1 pt-5">
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
            {success && 
                <div className="lead">
                    {email} has been succesfully added to our list. <br />
                    <Link to="/">Home page</Link>
                </div>
            }
        </div>
    
     );
}
 
export default Subscribe;