import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
        const {user}=useAuth()
    return (
        <div>
            {
                user.email?children: <Navigate to="/login"></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;