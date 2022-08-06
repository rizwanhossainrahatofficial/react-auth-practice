import React, { createContext } from 'react';
import useFibase from '../hooks/useFirebase';

export const AuthContext=createContext()
const AuthProvider = ({children}) => {

    const allcontext=useFibase()

    return (
        <AuthContext.Provider value={allcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;