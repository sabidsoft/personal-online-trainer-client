import React, { useEffect, useState } from 'react'
import DOMAIN_NAME from '../utilities/DOMAIN_NAME'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useTitle('Services')

    useEffect(() => {
        fetch(`${DOMAIN_NAME}/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {
                loading ? (
                    <div className='vh-100 d-flex justify-content-center align-items-center'>
                        <Spinner animation="border" variant="info" />
                    </div>
                ) : (
                    <>
                        <Container className='mb-5'>
                            <Row>
                                <Col sm='12' md='6' className='text-center mx-auto my-5'>
                                    <h1 className='mb-3'>All Services</h1>
                                    <p className='m-0 px-3'>
                                        Exercising regularly, every day if possible, is the single most important thing you can do for your health. In the long term, it reduces the risk of heart disease, stroke, diabetes, dementia, depression, and many cancers.
                                    </p>
                                </Col>
                            </Row>
                            <Row className='g-4'>
                                {
                                    services.map(service => {
                                        return (
                                            <Col key={service._id} lg='4' sm='12'>
                                                <div className='shadow rounded px-4 py-4 mb-5'>
                                                    <h5 className='mb-3'>{service.service_name}</h5>
                                                    <PhotoProvider>
                                                        <PhotoView src={service.image}>
                                                            <Image
                                                                src={service.image}
                                                                width={'100%'}
                                                                height={225}
                                                                className='rounded mb-3'
                                                                alt='Service Image'
                                                                style={{ objectFit: 'cover' }}
                                                            />
                                                        </PhotoView>
                                                    </PhotoProvider>
                                                    <p style={{ textAlign: 'justify' }}>{service.short_description}</p>
                                                    <div className='d-flex justify-content-between align-items-center mt-4'>
                                                        <p className='text-info fw-semibold pt-3'>Price: {service.price} Tk/month</p>
                                                        <Link to={`/services/${service._id}`}>
                                                            <Button variant="outline-info" className='rounded-pill px-4'>View Details</Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Services