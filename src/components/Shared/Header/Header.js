import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Products</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        {
                            !user && <Nav.Link as={Link} to="/login" className="text-decoration-none">Login</Nav.Link>
                        }
                        {
                            !user && <Nav.Link as={Link} to="/signup">
                                <Button variant="danger">Sign Up</Button>
                            </Nav.Link>
                        }

                        {
                            user && <div>
                                <span><i class="far fa-user"></i> {user?.displayName}</span>
                                <Button onClick={logOut} variant="danger" className="ms-2">Log Out</Button>
                            </div>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;