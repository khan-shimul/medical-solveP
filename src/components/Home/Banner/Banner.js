import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Banner.css';


const Banner = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/about')
    }

    return (
        <div>
            <div className="home-banner">
                <div className="container">
                    <div className="row text-white banner d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-7">
                            <h1>Doctors Prescribe <br /> MediSolve Products</h1>
                            <p> Medical Solve doctors allows you the potential to impact human life in a way that is truly unique and the job satisfaction you get is unparalleled.</p>
                            <Button onClick={handleClick} variant="warning">Learn More</Button>
                        </div>
                        <div className="col-12 col-md-5">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;