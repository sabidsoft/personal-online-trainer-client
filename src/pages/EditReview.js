import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLocation } from 'react-router-dom'
import DOMAIN_NAME from '../utilities/DOMAIN_NAME'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useTitle from '../hooks/useTitle'

const EditReview = () => {
    const [review, setReview] = useState(null)
    const location = useLocation()
    useTitle('Edit Review')
    const id = location.state

    const handleOnSubmit = event => {
        event.preventDefault()
        const textareaReview = event.target.textarea.value

        fetch(`${DOMAIN_NAME}/edit-review?id=${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ textareaReview })
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Review has been updated.', {
                    position: "top-center",
                    autoClose: 2000,
                })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`${DOMAIN_NAME}/edit-review?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col>
                        <h1 className='text-center mb-5'>Edit Review</h1>
                        <div className='d-flex align-items-center mb-3'>
                            <div>
                                <Image
                                    src={review?.reviewer_photo}
                                    width={40}
                                    height={40}
                                    roundedCircle
                                    alt='User Profile'
                                />
                            </div>
                            <p className='fw-bold m-0 ms-2'>{review?.reviewer_name}</p>
                        </div>
                        <h5 className='mb-3'>Edit {review?.service_name} review</h5>
                        <Form onSubmit={handleOnSubmit} className='pb-5'>
                            <textarea defaultValue={review?.reviewer_review} name="textarea" cols="10" rows="6" className='w-100 p-3 d-inline-block mb-3'></textarea>
                            <Button variant="info" type='submit' className='text-white'>Submit Edited Review</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
            <ToastContainer/>
        </>
    )
}

export default EditReview