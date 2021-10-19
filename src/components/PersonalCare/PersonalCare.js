import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './PersonalCare.css';
import img1 from '../../images/personalCare/1.jpg';
import img2 from '../../images/personalCare/2.jpg';
import img3 from '../../images/personalCare/3.jpg';
import img4 from '../../images/personalCare/4.jpg';
import img5 from '../../images/personalCare/5.jpg';

const PersonalCare = () => {
    return (
        <div>
            <div className="personal-care d-flex align-items-center justify-content-center">
                <div className="text-white p-5 text-center">
                    <h1 className="support-title">Personal Care</h1>
                    <p>Available for you</p>
                </div>
            </div>

            <div className="health-care-team-container my-5">
                <div className="text-center">
                    <h2>Health care team</h2>
                    <p>Our Medical warriors</p>
                </div>
                <div className="team">
                    <Container>
                        <Row xs={1} sm={2} md={4} className="g-4">
                            <Col>
                                <Card className="product h-100 p-2 text-center">
                                    <Card.Img variant="top" src={img1} />
                                    <Card.Body>
                                        <Card.Title>Dr. Carley Fuller</Card.Title>
                                        <Card.Text>
                                            Cardiologist
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="product h-100 p-2 text-center">
                                    <Card.Img variant="top" src={img2} />
                                    <Card.Body>
                                        <Card.Title>Dr. Johnton</Card.Title>
                                        <Card.Text>
                                            Audiologist
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="product h-100 p-2 text-center">
                                    <Card.Img variant="top" src={img3} />
                                    <Card.Body>
                                        <Card.Title>Dr. Michely</Card.Title>
                                        <Card.Text>
                                            Dentist
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="product h-100 p-2 text-center">
                                    <Card.Img variant="top" src={img4} />
                                    <Card.Body>
                                        <Card.Title>Dr. SimKhan</Card.Title>
                                        <Card.Text>
                                            Neurologist
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="contact container p-4 mb-5 border border-1 rounded-3">

                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6">
                        <img src={img5} className="w-100 mb-3" alt="" />
                    </div>
                    <div className=" col-12 col-md-6">
                        <div>
                            <small className="mb-3">Connect with Specialist</small>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Problem</Form.Label>
                                <Form.Control as="textarea" rows={4} />
                            </Form.Group>
                            <Button variant="primary">Contact</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalCare;