import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link, useLoaderData, useLocation } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import Footer from '../components/Footer'
import { AuthContext } from '../context/AuthProvider'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DOMAIN_NAME from '../utilities/DOMAIN_NAME'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useTitle from '../hooks/useTitle'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const Service = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    const { _id, service_name, image, price, description } = useLoaderData()
    const location = useLocation()
    useTitle('Service')

    const handleOnSubmit = event => {
        event.preventDefault()
        const review = event.target.textarea.value

        const reviewInfo = {
            service_id: _id,
            service_name: service_name,
            reviewer_email: user.email,
            reviewer_name: user.displayName,
            reviewer_photo: user.photoURL,
            reviewer_review: review
        }

        fetch(`${DOMAIN_NAME}/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset()
                fetch(`${DOMAIN_NAME}/reviews/${_id}`)
                    .then(res => res.json())
                    .then(data => {
                        setReviews(data)
                        toast.success('Review has been submited.', {
                            position: "top-center",
                            autoClose: 2000,
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`${DOMAIN_NAME}/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(err => console.log(err))
    }, [_id])

    return (
        <>
            <Container className='mb-5'>
                <Row>
                    <Col className=''>
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <Image
                                    src={image}
                                    width={'100%'}
                                    height={600}
                                    alt='Service Picture'
                                />
                            </PhotoView>
                        </PhotoProvider>
                        <h1 className='text-center mt-5 mb-3'>{service_name}</h1>
                        <p className='text-center fs-5 fw-bold mb-5'>Price: {price}/month</p>
                        <p className='mt-5' style={{ textAlign: 'justify' }}><span className='d-inline-block text-info fs-5 fw-bold mb-2'>Description:</span><br />{description}</p>
                    </Col>
                </Row>
            </Container>
            <Container className=''>
                <Row>
                    <Col className='mb-4'>
                        <h1 className='text-center text-info mb-3'>Reviews</h1>
                    </Col>
                </Row>
            </Container>
            <Container className='mb-5 pb-5'>
                {
                    user ? (
                        <>
                            <h5 className='mb-3'>Add a review</h5>
                            <div className='d-flex align-items-center mb-3'>
                                <div>
                                    <Image
                                        src={user?.photoURL}
                                        width={40}
                                        height={40}
                                        roundedCircle
                                        alt='User Profile'
                                    />
                                </div>
                                <p className='fw-bold m-0 ms-2'>{user?.displayName}</p>
                            </div>
                            <Form onSubmit={handleOnSubmit} className='pb-5'>
                                <textarea name="textarea" cols="10" rows="2" placeholder='Write your review' className='w-100 p-3 d-inline-block mb-3'></textarea>
                                <Button variant="info" type='submit' className='text-white'>Submit Review</Button>
                            </Form>
                        </>
                    ) : (
                        <div className='mb-5 text-center'>
                            <span className='fs-5'>Please login to add a review. <Link to='/login' state={location}>Login here</Link></span>
                        </div>
                    )
                }
                {
                    reviews.length !== 0 ? (
                        <h5 className='mb-3'>All Reviews</h5>
                    ) : (
                        <h5 className='mb-3'>No Reviews Found</h5>
                    )
                }
                {
                    reviews.map(review => {
                        return (
                            <Row key={review._id} className='mb-4'>
                                <Col>
                                    <div className='d-flex align-items-center mb-2'>
                                        <div>
                                            <Image
                                                src={review.reviewer_photo}
                                                width={40}
                                                height={40}
                                                roundedCircle
                                                alt='Reviewer Profile'
                                            />
                                        </div>
                                        <p className='fw-bold m-0 ms-2'>{review.reviewer_name}</p>
                                    </div>
                                    <div className='mb-2'>
                                        <AiFillStar size={20} color='#FFD700' />
                                        <AiFillStar size={20} color='#FFD700' />
                                        <AiFillStar size={20} color='#FFD700' />
                                        <AiFillStar size={20} color='#FFD700' />
                                        <AiFillStar size={20} color='#FFD700' />
                                    </div>
                                    <p style={{ textAlign: 'justify' }}>{review.reviewer_review}</p>
                                </Col>
                            </Row>
                        )
                    })
                }
            </Container>
            <Footer />
            <ToastContainer />
        </>
    )
}

export default Service