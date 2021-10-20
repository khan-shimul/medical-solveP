import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory, useParams } from 'react-router';
import useProducts from '../../hooks/useProducts';
import Product from '../Home/Product/Product';
import './ProductDetail.css';

const ProductDetail = () => {
    // load data
    const [products] = useProducts();
    const { id } = useParams();
    // find product that user clicked
    const singleProduct = products?.find(pd => pd.id === parseInt(id))
    const { name, img, price, description, rating, type } = singleProduct || {};

    const history = useHistory();
    // handle shop click
    const handleShop = () => {
        history.push('/shop-done')
    }

    const restProducts = products.filter(product => product.id !== parseInt(id))

    return (
        <div className="container mb-3 mt-2">
            <h2 className="text-success fw-bold">{type}</h2>
            <div className="line mb-2"></div>
            <div>
                <div className="row g-4 product-details">
                    <div className="col-12 col-md-6">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-6 bg-primary bg-opacity-10 p-5 rounded">
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
                        <Button onClick={handleShop} variant="danger" className="mb-3">Shop Now</Button>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Container>
                    <Row xs={1} sm={2} md={4} className="g-4">
                        {
                            restProducts.map(pd => <Product
                                key={pd.id}
                                product={pd}
                            />)
                        }
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default ProductDetail;