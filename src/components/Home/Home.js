import React from 'react';
import useFibase from '../../hooks/useFirebase';

const Home = () => {
 const{user}= useFibase()
    return (
        <div>
          <h2>user:{user.displayName}</h2>
        </div>
    );
};

export default Home;<h3>this is home</h3>