import React, { createContext } from 'react';
import useProducts from '../hooks/useProducts';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const productsContext = useProducts();

    return (
        <AuthContext.Provider value={productsContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;