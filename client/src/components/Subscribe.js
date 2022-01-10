import { useState } from "react";
import React from "react";
import axios from "axios";

const Subscribe = () => {
    const [newSubscriber, setNewSubscriber] = useState('');
    const [dailyCheck, setDailyCheck] = useState(true);
    const [alertCheck, setAlertCheck] = useState(false);
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubscriberChange = (e) => {
        setNewSubscriber(e.target.value);
    }

    const handleDailyChange = (e) => {
        setDailyCheck(!dailyCheck);
    }

    const handleAlertChange = (e) => {
        setAlertCheck(!alertCheck);
    }

//needs DB error checking
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newSubscriber) {
            if (dailyCheck || alertCheck) {
                axios
                .get(`http://localhost:5000/subscriber/${newSubscriber}`)
                .then((res) => {
                    if (!res.data) {
                        axios
                        .post('http://localhost:5000/subscriber', 
                            {email: newSubscriber, daily: dailyCheck, alert: alertCheck})
                        .then((res) => {
                            setEmail(newSubscriber);
                            setSuccess(true);
                        })
                        .catch (err => console.log(err))
                    }
                    else {
                        setSuccess(false);

//change alert to proper pop-up window?                        
                        alert(`${newSubscriber} is already on our list!`)
                    }
                    setNewSubscriber('');
                })
                .catch (err => {
                    console.log(err);
                    alert('There was an error connecting to the databse. Please try again later.');
                })

            }
            else {
                alert('Please select at least one type of email')
            }

        }
    }

    return ( 
        <div className="container bg-light py-5 d-flex flex-column" id="subscribe">
            <div className="row">
                <div className="col h1 text-center py-3 py-md-5 h-25">
                    Subscribe to our email updates
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-md-10 fs-6 m-3 p-2 text-lg-center">
                    If you'd like to receive updates on surfing water levels in the New River Gorge area in West Virginia, please enter your email address. You can choose which email(s) you want to sign up for: daily updates each morning or an alert email only when the levels are suitable for surfing.
                </div>
            </div>
            <div className="row justify-content-center">
                <form className="col-md-6" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 col input-group">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-envelope"></i>
                            </span>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="inputEmail" 
                                placeholder="example@email.com"
                                value={newSubscriber}
                                onChange={handleSubscriberChange}/>
                        </div>
                        <div className="col-md-5">
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="" 
                                    id="dailyEmailCheck" 
                                    checked={dailyCheck}
                                    onChange={handleDailyChange} />
                                <label className="form-check-label" htmlFor="dailyEmailCheck">
                                    Daily Emails
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="" 
                                    id="alertEmailCheck" 
                                    checked={alertCheck} 
                                    onChange={handleAlertChange}/>
                                <label className="form-check-label" htmlFor="alertEmailCheck">
                                    Alert Emails
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 my-md-3 justify-content-center">
                        <div className="col text-center">
                            <button className="btn btn-primary btn-lg" type="submit">Subscribe</button>
                        </div>
                    </div>
                    {success && 
                        <div className="row">
                            <div className="col fs-6 text-center my-2">
                                Success! {email} has been succesfully subscribed.
                            </div>
                        </div>
                    }
                    <h1 className="d-none d-xl-block"> <br /> <br /> </h1>
                </form>
            </div>
            
        </div>
    
     );
}
 
export default Subscribe;