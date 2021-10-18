import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <section className="login-section">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="mt-5">

                        <Form className="mt-4 login-form w-100">
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" required />

                            </Form.Group>

                            <Button variant="danger" className="w-100 py-2 mb-2" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                        <div className="text-center">
                            <Link to="/login" className="already-exist primary text-center">Already have an account?</Link>
                        </div>
                        <div className="or-sign-in text-center">
                            <h5>or</h5>
                            <Button className="rounded-3 btn-danger"><i className="fab fa-google"></i> Google Sign In</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;