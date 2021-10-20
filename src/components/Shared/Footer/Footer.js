import React from 'react';
import './Footer.css';
import pay from '../../../images/pay.png';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container overflow-hidden text-white">
                <div className="row footer p-5">
                    <div className="col-12 col-md-4">
                        <h1>About</h1>
                        <p className="short-footer">Medical care has several important functions other than restoring or maintaining health. These other functions are assessment and certification of health status, prognostication, segregation of the ill to limit communication of illness, and helping to cope with the problems of illness--the caring function.</p>
                        <div className="row">
                            <div className="col-md-7">
                                <img src={pay} className="w-100 mb-3" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 className="text-center">Opening Hour</h2>
                        <div className="opening-hour-container d-flex align-items-center justify-content-center">
                            <div className="open-day">
                                <p>Mon --------------- </p>
                                <p>Tue --------------- </p>
                                <p>Wed --------------- </p>
                                <p>Thu --------------- </p>
                                <p>Fri --------------- </p>
                                <p>Sat --------------- </p>
                                <p>Sun --------------- </p>

                            </div>
                            <div className="open-hour">
                                <p>9.00-22.00</p>
                                <p>9.00-22.00</p>
                                <p>9.00-22.00</p>
                                <p>9.00-22.00</p>
                                <p>9.00-22.00</p>
                                <p>9.00-22.00</p>
                                <p>9.00-22.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact">
                            <h2>Contact</h2>
                            <div className="home d-flex">
                                <div className="me-2">
                                    <i className="fas fa-home"></i>
                                </div>
                                <div>
                                    <p>11033 New street, California, USA</p>
                                </div>
                            </div>
                            <div className="phone d-flex">
                                <div className="me-2">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <p>(0008) 159-456-999</p>
                                </div>
                            </div>
                        </div>
                        <h3>Subscribe</h3>
                        <InputGroup className="mb-3 w-75">
                            <FormControl className="py-2"
                                placeholder="Your email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                        <small className="text-secondary">Get e-mail updates about our latest products and special offers.</small>
                        <p><small>All reserved <span>&copy;</span> Copyright 2021 - 2025 </small></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;