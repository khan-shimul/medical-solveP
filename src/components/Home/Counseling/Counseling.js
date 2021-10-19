import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img from '../../../images/counseling/1.png';
import './Counseling.css';

const Counseling = () => {
    const history = useHistory();

    const handleCall = () => {
        history.push("/contact-us")
    }

    return (
        <div className="counseling-container mt-4">
            <div className="container pt-3">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-7 pe-3">
                        <h2>Online Psychologist</h2>
                        {/* <div className="line mb-2"></div> */}
                        <p>Overall, psychologists assess, diagnose, and treat the psychological problems and the behavioral dysfunctions resulting from, <br /> or related to physical and mental health. In addition, they play a major role in the promotion of healthy behavior and improving patients' quality of life.</p>
                        <Button onClick={handleCall} variant="success">Call Now</Button>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src={img} className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counseling;