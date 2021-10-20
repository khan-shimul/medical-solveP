import React from 'react';
import './NotFound.css'
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'
import errorImg from '../../images/error.png'

const NotFound = () => {
    let history = useHistory()
    const handleBackHome = () => {
        history.push("/home")
    }
    return (
        <div className="overflow-hidden">
            <div className="row error-container d-flex align-items-center">
                <div className="col-md-6 px-5">
                    <h1 className="error-title">Ooops! The page you are looking for is not available</h1>
                    <Button onClick={handleBackHome} className="btn btn-danger">Back to Home</Button>
                </div>
                <div className="col-md-6">
                    <img className="error-img" src={errorImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;