import React from 'react';
import Banner from '../Banner/Banner';
import Counseling from '../Counseling/Counseling';
import CustomerService from '../CustomerService/CustomerService';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div id="/home">
            <Banner />
            <CustomerService />
            <Products />
            <Counseling />
        </div>
    );
};

export default Home;