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
        <div className="mt-5 container">
            <div className="row">
                <div className="col h1 text-center py-3 py-md-5 bg-light h-25">
                    Subscribe to our email updates
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-md-10 fs-6 m-3 p-2 text-lg-center">
                    If you'd like to receive updates on surfing water levels in the New River Gorge area in West Virginia, please enter your email address. You can choose which email(s) you want to sign up for: daily updates each morning or an alert email only when the levels are suitable for surfing.
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
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
            </div>
            
        </div>
    
     );
}
 
export default Subscribe;