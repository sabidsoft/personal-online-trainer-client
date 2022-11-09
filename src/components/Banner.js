import React from 'react'
import bannerImage from '../assets/images/banner.jpg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundRepeat: 'no-repeat',
            height: '768px',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '100PX'
        }}>
            <h1 className='text-center text-white text-uppercase mb-4'>Personal <span className='text-danger'>Fitness</span> Trainer</h1>
            <p className='text-center text-white text-capitalize mb-1'>Fast track your transformation by working directly with an Online Personal Trainer</p>
            <p className='text-center text-white text-capitalize mb-5'>Get fit and look great</p>
            <Link to='/services'>
                <Button variant="outline-danger" className='rounded-pill px-4'>My Services</Button>
            </Link>
        </section>
    )
}

export default Banner