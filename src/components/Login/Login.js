import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();

    return (
        <section className="login-section">
            <div className="d-flex justify-content-center align-items-center">
                <div className="mt-5">
                    <Form className="mt-4 login-form w-100">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />

                        </Form.Group>
                        <Button variant="danger" className="w-100" type="submit">
                            Sign In
                        </Button>
                    </Form>
                    <div className="text-center">
                        {/* <button onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button>
                        <br /> */}
                        <Link to="/signup" className="primary text-center">New to Red Onion? Create Account</Link>
                    </div>
                    <div className="or-sign-in text-center">
                        <h5>or</h5>
                        <Button onClick={signInUsingGoogle} className="rounded-3 btn-danger"><i className="fab fa-google"></i> Google Sign In</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;