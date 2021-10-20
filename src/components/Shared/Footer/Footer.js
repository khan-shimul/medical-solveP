import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/logo.png';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container overflow-hidden">
                <div className="row footer p-5">
                    <div className="col-12 col-md-4">
                        <h1 className="f-title">About</h1>
                        <p className="short-footer">Medical care has several important functions other than restoring or maintaining health. These other functions are assessment and certification of health status, prognostication, segregation of the ill to limit communication of illness, and helping to cope with the problems of illness--the caring function.</p>
                        <div className="row">
                            <div className="col-md-8">
                                <img src={logo} className="w-25 mb-3" alt="" />
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

                            </div>
                            <div className="open-hour">
                                <p>9.00-22.00</p>
                                <p>9.00-22.00</p>
                                <p>9.00-22.00</p>
                                <p>9.00-22.00</p>
                                <p>9.00-22.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h1 className="f-title">Subscribe</h1>
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