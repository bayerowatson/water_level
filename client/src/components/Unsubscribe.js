import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Unsubscribe = () => {
    const [email, setEmail] = useState('');
    const [unsubscribed, setUnsubscribed] = useState('');
    const [success, setSuccess] = useState(false);
    
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
        <div className="container bg-light py-5 d-flex flex-column">
            <div className="row">
                <div className="h1 col text-center py-3 py-md-5 h-25">
                    We're sorry to see you go...
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-11 col-md-6 col-lg-4 text-center mb-3">
                    <label htmlFor="inputEmail" className="form-label">Enter your email address to unsubscribe</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail"
                        value={email}
                        onChange={handleChange}/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-md-4 text-center">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Unsubscribe
                    </button>
                </div>
            </div>
            {success && 
            <div className="row">
                <div className="col fs-6 text-center my-5">
                {unsubscribed} has been succesfully removed from our list.<br />
                    <Link to="/">Home page</Link>
                </div>
            </div>
            }
           
            

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            Are you sure you want to unsubscribe {email}?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> setEmail('')}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleDelete} data-bs-dismiss="modal">Unsubscribe</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    
     );
}
 
export default Unsubscribe;