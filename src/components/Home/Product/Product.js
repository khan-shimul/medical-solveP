import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Product.css';


const Product = ({ product }) => {
    const { name, img, description, price, rating } = product;

    return (
        <Col>
            <Card className="food text-center p-2 border-0 meal">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 25)}...
                    </Card.Text>
                    <h5>${price}</h5>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;