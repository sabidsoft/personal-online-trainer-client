import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import useTitle from '../hooks/useTitle'

const ErrorPage = () => {
    useTitle('Error Page')
    return (
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='mb-4'>Oops!</h1>
            <h4 className='mb-4'>404 - PAGE NOT FOUND</h4>
            <p className='m-0'>The page you are looking for might have been removed,</p>
            <p className='mb-5'>had its name changed or is temporarily unavailable.</p>
            <Link to='/'>
                <Button variant="outline-info" className='rounded-pill px-5'>Go to Home</Button>
            </Link>
        </div>
    )
}

export default ErrorPage