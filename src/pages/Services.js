import React, { useEffect, useState } from 'react'
import DOMAIN_NAME from '../utilities/DOMAIN_NAME'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Footer from '../components/Footer'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`${DOMAIN_NAME}/services`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    })
    return (
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
                                        <Image
                                            src={service.image}
                                            width={'100%'}
                                            height={225}
                                            className='rounded mb-3'
                                            alt='Service Image'
                                        />
                                        <p style={{ textAlign: 'justify' }}>{service.short_description}</p>
                                        <div className='d-flex justify-content-between align-items-center mt-4'>
                                            <p className='text-info fw-semibold pt-3'>Price: {service.price} Tk/month</p>
                                            <Button variant="outline-info" className='rounded-pill px-4 fw-semibold'>View Details</Button>
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

export default Services