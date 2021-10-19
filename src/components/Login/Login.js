import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { setError, setEmail, setPassword, setIsLoading, signInUsingGoogle, auth, email, password, signInWithEmailAndPassword } = useAuth();

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
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <section className="login-section">
            <div className="d-flex justify-content-center align-items-center">
                <div className="mt-5">
                    <Form onSubmit={signInUsingEmailPass} className="mt-4 login-form w-100">
                        <Form.Group onBlur={getEmailChange} className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group onBlur={getPasswordChange} className="mb-3" controlId="formBasicPassword">
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
                        <Button onClick={handleSignIn} className="rounded-3 btn-danger"><i className="fab fa-google"></i> Google Sign In</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;