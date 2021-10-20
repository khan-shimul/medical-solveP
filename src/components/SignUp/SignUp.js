import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css';
import loginImage from '../../images/loginIlus.jpg';

const SignUp = () => {
    const { setUserName, error, email, password, handleNameChange, auth, setEmail, setPassword, setError, setIsLoading, signInUsingGoogle, createUserWithEmailAndPassword } = useAuth();

    const location = useLocation();
    const history = useHistory();
    // handle redirect
    const redirect_uri = location.state?.from || "/home";
    // console.log(redirect_uri)

    // get email
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    // get password
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    // create user with email and pass
    const signUpWithEmailPass = e => {
        e.preventDefault();
        // validation 6 character
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }
        // validation must have two digit
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Plz Ensure Pass has two digits.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            // setIsLoading(true)
            .then(result => {
                console.log(result.user)
                setError('')
                setUserName()
                history.push(redirect_uri)
            })
            .then(() => { window.location.reload() })
            .catch(error => {
                setError(error.message)
            })
        // .finally(() => setIsLoading(false))
    }

    // google sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user)
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div>
            <section className="login-section container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={loginImage} className="w-100" alt="" />
                    </div>
                    <div className="col-md-6 bg-primary bg-opacity-10 rounded">
                        <div className="p-5">

                            <Form onSubmit={signUpWithEmailPass} className="login-form w-100">
                                <h2 className="login-title">Please Sign Up</h2>
                                <Form.Group onBlur={handleNameChange} className="mb-3">
                                    <Form.Control type="text" placeholder="Name" required />
                                </Form.Group>

                                <Form.Group onBlur={handleEmailChange} className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" required />
                                </Form.Group>

                                <Form.Group onBlur={handlePasswordChange} className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" required />
                                    <div className="w-100">
                                        <Form.Text className="text-danger">
                                            {error}
                                        </Form.Text>
                                    </div>
                                </Form.Group>

                                <button className="sign-in w-100 py-2 mb-2" type="submit">
                                    Sign Up
                                </button>
                            </Form>
                            <div className="text-center">
                                <Link to="/login" className="already-exist primary text-center text-decoration-none">Already have an account?</Link>
                            </div>
                            <div className="or-sign-in text-center">
                                <h5>or</h5>
                                <Button onClick={handleGoogleSignIn} className="rounded-3 btn-danger"><i className="fab fa-google"></i> Google Sign In</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;