import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFibase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user,logout}=useAuth()
    console.log(user)
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/placeorder'>Place order</Link>
            <span>{user.displayName}</span>
            {user?.email &&<button onClick={logout}>Log out</button>}
        </div>
    );
};

export default Header;