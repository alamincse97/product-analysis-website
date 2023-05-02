import React from 'react';
import './Review.css';

const Review = ({review}) => {

    const { name, img, ratings, reviews } = review;
    return (
        <div className='col-md-4 mt-4 review'>
            <div class="card justify-content-center m-0 border-0">
                <img src={img} class="card-img-top rounded mx-auto d-block h-50 w-75" alt="..."/>
                <div class="card-body">
                    <h4 className='text-center mt-2 text-danger'>{name}</h4>
                    <p className='text-center text-secondary'><small>Rating : <span className='text-success fw-bold'>{ratings} Stars</span></small></p>
                    <p className='text-center'>{reviews}</p>
                </div>  
            </div>
        </div>
    );
};

export default Review;