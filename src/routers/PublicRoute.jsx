import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Route } from 'react-router';
import { HomePage } from '../pages/HomePage';

export const PublicRoute = ({
    userAuth,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
            component={ (props) =>(
                (!userAuth)
                ? (<Component { ...props } />)
                : ( <HomePage/>)
            )}
        />
    )
}

PublicRoute.propTypes = {
    userAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}