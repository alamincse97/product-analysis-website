import React from 'react';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className='m-4'>
            <h1 className='text-danger text-center not-found fw-light'>404</h1>
            <h1 className='text-center'>OPPS! NOTHING WAS FOUND</h1>
        </div>
    );
};

export default Notfound;