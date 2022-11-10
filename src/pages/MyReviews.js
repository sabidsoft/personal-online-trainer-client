import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import DOMAIN_NAME from '../utilities/DOMAIN_NAME'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { AiFillStar } from 'react-icons/ai'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MyReviews = () => {
    const [myReviews, setMyReiews] = useState([])
    const { user } = useContext(AuthContext)

    const handleDeleteReview = id => {
        fetch(`${DOMAIN_NAME}/delete-review/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                fetch(`${DOMAIN_NAME}/my-reviews?email=${user?.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setMyReiews(data)
                    })
                    .catch(err => console.log(err))
                toast.success('Review deleted!')

            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`${DOMAIN_NAME}/my-reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReiews(data)
            })
            .catch(err => console.log(err))
    }, [user])

    return (
        <>
            {
                myReviews.length === 0 ? (
                    <div className='vh-100 d-flex justify-content-center align-items-center'>
                        <h3>No Reviews Found</h3>
                    </div>
                ) : (
                    <div className='my-5'>
                        <h1 className='text-center mb-5'>My Reviews</h1>
                        <Container>
                            {
                                myReviews.map(myReview => {
                                    return (
                                        <Row key={myReview._id} className='mb-5'>
                                            <Col>
                                                <div className='d-flex align-items-center mb-2'>
                                                    <div>
                                                        <Image
                                                            src={myReview.reviewer_photo}
                                                            width={40}
                                                            height={40}
                                                            roundedCircle
                                                            alt='Reviewer Profile'
                                                        />
                                                    </div>
                                                    <p className='fw-bold m-0 ms-2'>{myReview.reviewer_name}</p>
                                                </div>
                                                <div className='mb-2'>
                                                    <AiFillStar size={20} color='#FFD700' />
                                                    <AiFillStar size={20} color='#FFD700' />
                                                    <AiFillStar size={20} color='#FFD700' />
                                                    <AiFillStar size={20} color='#FFD700' />
                                                    <AiFillStar size={20} color='#FFD700' />
                                                </div>
                                                <h5>Review for {myReview.service_name}</h5>
                                                <p style={{ textAlign: 'justify' }}>{myReview.reviewer_review}</p>
                                                <div>
                                                    <Link to='/edit-review' state={myReview._id}>
                                                        <Button variant="info" className='text-white d-inline-block me-3'>Edit Review</Button>
                                                    </Link>
                                                    <Button onClick={() => handleDeleteReview(myReview._id)} variant="info" className='text-white'>Delete Review</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </Container>
                    </div>
                )
            }
            <ToastContainer
                position="top-center"
            />
        </>
    )
}

export default MyReviews