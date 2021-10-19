import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner4 from '../../../images/banner/caro7.jpg';
import banner5 from '../../../images/banner/caro6.jpg';
import banner6 from '../../../images/banner/caro4.jpg';


const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner6}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>What is vitamin used for?</h3>
                        <p>Vitamins are a group of substances that are needed for normal cell function, growth, and development...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Ambulatory Blood Pressure</h3>
                        <p>Ambulatory blood pressure monitoring allows your blood pressure (BP)...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Prescribe Medical Solve</h3>
                        <p>Doctors prescribe medical solve products!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;