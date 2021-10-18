import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './ProductDetail.css';

const ProductDetail = () => {
    const [products] = useAuth();
    const { id } = useParams();

    const singleProduct = products?.filter(pd => pd.id === parseInt(id))
    console.log(singleProduct)

    const { name, img, price, description, rating, type } = singleProduct[0];

    const history = useHistory();
    // handle shop click
    const handleShop = () => {
        history.push('/shopdone')
    }

    return (
        <div className="container">
            <h2>Product Details Coming soon for: {id}</h2>
            <div>
                <div className="row g-4 product-details">
                    <div className="col-12 col-md-6">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-6">
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
                        <Button onClick={handleShop} variant="danger">Shop Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;