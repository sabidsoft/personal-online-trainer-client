import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Footer from '../components/Footer'
import DOMAIN_NAME from '../utilities/DOMAIN_NAME'

const AddService = () => {
    const [error, setError] = useState('')
    const handleOnSubmit = event => {
        event.preventDefault()
        const serviceName = event.target.serviceName.value
        const price = event.target.price.value
        const rating = event.target.rating.value
        const photoURL = event.target.photoURL.value
        const shortDescription = event.target.shortDescription.value
        const fullDescription = event.target.fullDescription.value

        const service = {
            service_name: serviceName,
            image: photoURL,
            rating: rating,
            price: price,
            short_description: shortDescription,
            description: fullDescription
        }
       
        fetch(`${DOMAIN_NAME}/add-service`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <Container className='mt-5 px-4 pb-5'>
                <Row className='mb-5'>
                    <Col  className='mx-auto rounded shadow my-5 p-5'>
                        <h2 className='text-center m-0 mb-5'>Add Service</h2>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicServiceName">
                                <Form.Label>Service name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='serviceName'
                                    placeholder="Enter service name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='price'
                                    placeholder="Enter price"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicRating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='rating'
                                    placeholder="Enter rating"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPhotoURL">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='photoURL'
                                    placeholder="Enter photo url"
                                    required
                                />
                            </Form.Group>
                            <label htmlFor="shortDescription" className='mb-2'>Short Description</label>
                            <textarea name="shortDescription" id='shortDescription' cols="10" rows="1" placeholder='Write your short description (max 100 characters)' className='w-100 p-3 d-inline-block mb-3'></textarea>

                            <label htmlFor="fullDescription" className='mb-2'>Full Description</label>
                            <textarea name="fullDescription" id='fullDescription' cols="10" rows="6" placeholder='Write your full description' className='w-100 p-3 d-inline-block mb-3'></textarea>
                            {
                                error && <p className='text-center text-danger'>{error}</p>
                            }
                            <Button variant="info" type="submit" className=' text-white'>
                                Submit Service
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};

export default AddService;