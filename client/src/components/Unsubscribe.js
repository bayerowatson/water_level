import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";

const Unsubscribe = () => {
    const [email, setEmail] = useState('');
    const [unsubscribed, setUnsubscribed] = useState('');
    const [success, setSuccess] = useState(false);
    
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
 
//needs DB error checking    
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

                .catch (err => {
                    console.log(err);
                    alert('There was an error connecting to the database. Please try again later.');
                })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var modalEl = document.getElementById('staticBackdrop');
        var modal = Modal.getOrCreateInstance(modalEl);
        modal.show();
    }

    return ( 
        <div className="container bg-light py-5 d-flex flex-column">
            <div className="row">
                <div className="h1 col text-center py-3 py-md-5 h-25">
                    We're sorry to see you go...
                </div>
            </div>
            <form className="needs-validation" onSubmit={handleSubmit}>
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
           
            

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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