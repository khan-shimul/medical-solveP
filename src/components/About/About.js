import React from 'react';
import './About.css';
import patient from '../../images/About/1.jpg';
import servicesImg from '../../images/About/services.png';
import { Button, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const About = () => {

    const history = useHistory()

    const handleGoToProducts = () => {
        history.push('/home#products')
    }

    return (
        <div>
            <div className="about-uss d-flex justify-content-center align-items-center text-white text-center">
                <div>
                    <h1 className="text-center about-title">About</h1>
                    <div className="line-about d-flex mx-auto mb-2"></div>
                    <p className="about-sub text-center">Medical care has several important functions other than restoring or maintaining health. These other functions are assessment and certification of health status, prognostication, segregation of the ill to limit communication of illness, and helping to cope with the problems of illness--the caring function.</p>
                </div>
            </div>

            <div className="container modern-health-care">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6">
                        <img src={patient} className="w-100" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Modern Medical Solve</h2>
                        <p>Modern healthcare is characterized by increasingly savvy patients who will research and question the advice given to them. As patients use technology to assist them in their health challenges, they also expect medical practitioners to also utilize technology to provide them with the highest level of care.</p>
                    </div>
                </div>
            </div>

            <div className="container about-services">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 ps-4">
                        <h2>Our Products</h2>
                        <p>Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services, and includes the cost of eyeglasses, hearing aids, pharmaceuticals, orthopedics, and prosthetic devices.</p>
                        <Button onClick={handleGoToProducts} className="mb-3" variant="primary">Go to products</Button>
                    </div>
                    <div className="col-md-6">
                        <img src={servicesImg} className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;