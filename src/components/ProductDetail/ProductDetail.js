import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();

    const [products] = useAuth();

    const singleProduct = products?.filter(pd => pd.id == id)

    const { name, img, price, description, rating, type } = singleProduct[0];


    return (
        <div>
            <h2>Product Details Coming soon for: {id}</h2>
            <div className="container">
                <div className="row g-4 product-details">
                    <div className="col-md-6 border border-1">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>{name}</h2>
                        <Rating className="icons"
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly
                        />
                        <p>{description}</p>
                        <p>Price: ${price}</p>
                        <p>Type: {type}</p>
                        <Button variant="danger">Shop Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;