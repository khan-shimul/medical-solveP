import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Product.css';


const Product = ({ product }) => {
    // destructure product info
    const { name, img, description, price, rating } = product;

    return (
        <Col>
            <Card className="product h-100 p-2">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="fs-5">{name}</Card.Title>
                    <Card.Text className="fs-6">
                        {description.slice(0, 30)}...
                    </Card.Text>
                    <div className="row">
                        <div className="col-md-6">
                            <Rating className="icons"
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            />
                        </div>
                        <div className="col-md-6">
                            <Card.Text className="price">${price}</Card.Text>
                        </div>
                    </div>
                    <button className="btn-regular">Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;