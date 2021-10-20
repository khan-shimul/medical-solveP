import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
import loginImg from '../../images/loginIlus.jpg';

const Login = () => {
    const { error, setError, setEmail, setPassword, setIsLoading, signInUsingGoogle, auth, email, password, signInWithEmailAndPassword } = useAuth();

    const location = useLocation();
    const history = useHistory();
    // handle redirect
    const redirect_uri = location.state?.from || "/home";

    // get email
    const getEmailChange = e => {
        setEmail(e.target.value);
    }
    // get password
    const getPasswordChange = e => {
        setPassword(e.target.value)
    }

    // handle sign in with email and pass
    const signInUsingEmailPass = e => {
        setIsLoading(true)
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('')
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // handle google sign in
    const handleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user)
                setError('')
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <section className="login-section container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={loginImg} className="w-100" alt="" />
                </div>
                <div className="col-md-6 bg-secondary bg-opacity-10 p-5 rounded">
                    <div>
                        <h2 className="login-title">Please Login</h2>
                        <Form onSubmit={signInUsingEmailPass} className="login-form w-100">
                            <Form.Group onBlur={getEmailChange} className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" required />
                            </Form.Group>

                            <Form.Group onBlur={getPasswordChange} className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                                <div className="w-100">
                                    <Form.Text className="text-danger">
                                        {error}
                                    </Form.Text>
                                </div>
                            </Form.Group>
                            <button className="w-100 mb-2 sign-in" type="submit">
                                Sign In
                            </button>
                        </Form>
                        <div className="text-center">
                            {/* <button onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button>
                        <br /> */}
                            <span className="text-secondary">New to MediSolve?</span><Link to="/signup" className="primary text-center text-decoration-none text-secondary"> <span className="text-primary">Create Account</span></Link>
                        </div>
                        <div className="or-sign-in text-center">
                            <h5>or</h5>
                            <Button onClick={handleSignIn} className="rounded-3 btn-danger"><i className="fab fa-google"></i> Google Sign In</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;