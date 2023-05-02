import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Image from '../../images/furniture.jpg';
import Review from '../Review/Review';
import './home.css';

const Home = () => {

    const [reviews, setReviews] = useProducts();
    return ( 
        <div>
            <div className='d-flex row mx-auto align-items-center'>
                <div className='col-md-8 text mb-4'>
                <h1>Explore Our Furniture</h1>
                <h1 className='text-danger'>And Home Furnishing Range...!</h1>
                <p>Whether you just moved into a new home or looking to revamp your current one, we at Regal Furniture are here to inspire you with affordable home furniture solutions, there is a piece of furniture to every corner of your home. Create a home that is perfect for you.</p>
                <Button variant="outline-danger border-2"><span className='fw-bold'>Explore</span></Button>{' '}
                </div>
                <div className='col-md-4'>
                    <img className='img-fluid' src={Image} alt="furniture" />
                </div>
            </div>
            <div className='container'>
                <h1 className='text-center'>Customer Reviews</h1>
                <div className='row'>
                    {
                        reviews.slice(0,3).map(review=><Review 
                            key={review.id}
                            review={review}
                            ></Review>)
                    }
                </div>
                <div className='headers'>
                <Link className='m-0 ps-5 pe-5' to="/reviews">See All Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;