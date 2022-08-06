import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
           <form >
              <input type="email" />
              <br />
              <input type="password" />
              <br />
              <input type="submit" value="Register" />
              <br />
              <Link to='/login'><span>Login your account</span> </Link>

           </form>
        </div>
    );
};

export default Register;<h4>thi is register</h4>