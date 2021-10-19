import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    // use products
    const [products] = useProducts();
    console.log(products)

    return (
        <section id="services">
            {/* Products Intro */}
            <div className="products-intro text-center">
                <h2>High Demand Products</h2>
                <p>Medical devices and health care products</p>
                <div className="line d-flex mx-auto"></div>
            </div>
            {/* Products Container */}
            <div className="mt-4">
                <Container>
                    <Row xs={1} sm={2} md={4} className="g-4">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Products;