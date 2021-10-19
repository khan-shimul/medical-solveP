import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    // check isLoading is true
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center my-3">
                <div><Spinner animation="border" variant="warning" /></div>
            </div>
        )
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? children
                    :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    ></Redirect>
            }
        ></Route>
    );
};

export default PrivateRoute;