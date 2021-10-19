import React from 'react';
import Banner from '../Banner/Banner';
import CustomerService from '../CustomerService/CustomerService';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div id="/home">
            <Banner />
            <CustomerService />
            <Products />
        </div>
    );
};

export default Home;