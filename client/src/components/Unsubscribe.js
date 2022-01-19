import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Unsubscribe = () => {
    const [email, setEmail] = useState('');
    const [unsubscribed, setUnsubscribed] = useState('');
    const [success, setSuccess] = useState(false);
    const [notFound, setNotFound] = useState(false);
    
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    
    const handleDelete = (e) => {      
        e.preventDefault();
        if (email) {
            axios
                .delete(`http://localhost:5000/subscriber/${email}`)
                .then(res => {
                    if (!res.data.deletedCount) {
                        setNotFound(true);
                        setUnsubscribed(email);
                        setSuccess(false);
                    }
                    else {
                        setNotFound(false);
                        setUnsubscribed(email)
                        setSuccess(true);
                    }
                    setEmail('');

                })

                .catch (err => {
                    console.log(err);
                    alert('There was an error connecting to the database. Please try again later.');
                })
        }
    }

    return ( 
        <div className="container bg-light py-5 my-5 d-flex flex-column">
            <div className="row">
                <div className="h1 col text-center py-3 py-md-5 h-25">
                    We're sorry to see you go...
                </div>
            </div>
            <form className="needs-validation" onSubmit={handleDelete}>
                <div className="row justify-content-center">
                    <div className="col-11 col-md-6 col-lg-4 text-center mb-3">
                        <label htmlFor="inputEmail" className="form-label">Enter your email address to unsubscribe</label>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-envelope"></i>
                            </span>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="inputEmail"
                            placeholder="example@email.com"
                            value={email}
                            onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-md-4 text-center">
                        <button type="submit" className="btn btn-primary">
                            Unsubscribe
                        </button>
                    </div>
                </div>
            </form>
            {success && 
            <div className="row">
                <div className="col fs-6 text-center my-5">
                {unsubscribed} has been succesfully removed from our list.<br />
                    <Link to="/">Home page</Link>
                </div>
            </div>
            }
            {notFound && 
            <div className="row">
                <div className="col fs-6 text-center my-5">
                {unsubscribed} was not found on our list.<br />
                    <Link to="/">Home page</Link>
                </div>
            </div>
            }

        </div>
    
     );
}
 
export default Unsubscribe;