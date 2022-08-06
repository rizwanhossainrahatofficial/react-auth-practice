import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFibase from '../../hooks/useFirebase';

const Login = (props) => {
    const {GoogleSignIn}=useAuth()
    return (
        <div>
           <h3>this is login</h3> 
        <Link to='/register'> <span>Create new Account</span></Link>  
        <br /> 
        <button onClick={GoogleSignIn}>Google sign in</button>
        </div>
    );
};

export default Login;<h3>this is login</h3>