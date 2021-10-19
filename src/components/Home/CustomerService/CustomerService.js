import React from 'react';
import { Row } from 'react-bootstrap';
import './CustomerService.css';

const CustomerService = () => {
    return (
        <section className="customer-service my-5 py-5">
            <div className="container">
                <Row>
                    <div className="col-12 col-md-4 d-flex align-items-center ">
                        <div className="bg-icon d-flex align-items-center justify-content-center">

                            <i className="fas fa-plane fs-2 text-white"></i>

                        </div>
                        <div>
                            <h5>FREE SHIPPING WORLDWIDE</h5>
                            <p>On order over $99 - 7 days a week</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex align-items-center ">
                        <div className="bg-icon d-flex align-items-center justify-content-center">

                            <i className="fas fa-truck fs-2 text-white"></i>

                        </div>
                        <div>
                            <h5>CASH ON DELIVERY</h5>
                            <p>100% money back guarantee</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex align-items-center ">
                        <div className="bg-icon d-flex align-items-center justify-content-center">

                            <i className="fas fa-headset fs-2 text-white"></i>

                        </div>
                        <div>
                            <h5>24/7 CUSTOMER SERVICE</h5>
                            <p>Call us 24/7 at 123-456-789</p>
                        </div>
                    </div>
                </Row>
            </div>
        </section>
    );
};

export default CustomerService;