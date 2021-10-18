import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ShopDone.css';

const ShopDone = () => {
    const history = useHistory();

    const handleShopDone = () => {
        history.push("/")
    }
    return (
        <div>
            <div className="shopping-banner d-flex justify-content-center align-items-center text-center text-white">
                <div>
                    <h2>Thank You for your Purchase</h2>
                    <p>We can not say it enough thank you for your purchase! <br /> We would love to see you again here</p>
                    <Button onClick={handleShopDone} variant="danger">Back to Home</Button>
                </div>
            </div>
        </div>
    );
};

export default ShopDone;