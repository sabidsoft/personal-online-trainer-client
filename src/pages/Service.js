import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { useLoaderData } from 'react-router-dom'
import test from '../assets/images/section.jpg'
import { AiFillStar } from 'react-icons/ai';
import Footer from '../components/Footer'
import { AuthContext } from '../context/AuthProvider'

const Service = () => {
    const { user } = useContext(AuthContext)
    const { service_name, image, price, description } = useLoaderData()
    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col className=''>
                        <h1 className='text-center text-info mt-5 mb-3'>{service_name}</h1>
                        <p className='text-center fs-5 fw-bold mb-5'>Price: {price}/month</p>
                        <Image
                            src={image}
                            width={'100%'}
                            height={600}
                        />
                        <p className='mt-5' style={{ textAlign: 'justify' }}><span className='d-inline-block text-info fs-5 fw-bold mb-2'>{service_name}:</span><br />{description}</p>
                    </Col>
                </Row>
            </Container>
            <Container className=''>
                <Row>
                    <Col className='my-5'>
                        <h1 className='text-center text-info mb-3'>Personal Fitness Trainer Reviews</h1>
                        <p>
                            These online personal training reviews are testament to the high level of service provided to all clients. Not only did these clients achieve their goals, but they now have the knowledge, the mindset, and the ability to maintain the results they've obtained!
                        </p>
                    </Col>
                </Row>
            </Container>
            {
                user ? (
                    <>

                    </>
                ) : (
                    <>
                        
                    </>
                )
            }
            <Container className='mb-5 pb-5'>
                <Row className='mb-4'>
                    <Col>
                        <div className='d-flex align-items-center mb-2'>
                            <div>
                                <Image
                                    src={test}
                                    width={40}
                                    height={40}
                                    roundedCircle
                                />
                            </div>
                            <p className='fw-bold m-0 ms-2'>Sabid Hasan</p>
                        </div>
                        <div className='mb-2'>
                            <AiFillStar size={20} color='#FFD700' />
                            <AiFillStar size={20} color='#FFD700' />
                            <AiFillStar size={20} color='#FFD700' />
                            <AiFillStar size={20} color='#FFD700' />
                            <AiFillStar size={20} color='#FFD700' />
                        </div>
                        <p>
                            Fantastic!! The training plans are second to none and clearly tailored to suit each individual clients requirements. The thing that sets Andy apart is the level of communication he gives you, he’s always on hand to answer any questions and give you plenty of encouragement along the way. The weekly feedback videos are especially helpful so you know you’re on the right track. Friendly and efficient service and would highly recommend to anyone. Cheers Andy! 😊👌🏻💪
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default Service