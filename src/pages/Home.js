import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'
import DOMAIN_NAME from '../utilities/DOMAIN_NAME'
import Footer from '../components/Footer'
import bgImg from '../assets/images/section.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const Home = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${DOMAIN_NAME}/services-home`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [services])

    return (
        <>
            {
                loading ? (
                    <div className='vh-100 d-flex justify-content-center align-items-center'>
                        <Spinner animation="border" variant="info" />
                    </div>
                ) : (
                    <>
                        <Banner />
                        <section>
                            <h1 className='text-center mb-3'>My Services</h1>
                            <p className='text-center m-0 px-3'>I have a range of programming to suit your needs. Whether you want to improve your athletic performance or</p>
                            <p className='text-center mb-5 pb-4 px-3'>simply focus on muscle gain or fat loss, I have the plan for you.</p>
                            <Container className='mb-5'>
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
                                <div className='text-center'>
                                    <Link to='/services'>
                                        <Button variant="outline-info" className='px-4 mb-5'>See All</Button>
                                    </Link>
                                </div>
                            </Container>
                        </section>
                        <section style={{
                            backgroundImage: `url(${bgImg})`,
                            backgroundRepeat: 'no-repeat',
                            height: '768px',
                            backgroundSize: 'cover',
                            // backgroundAttachment: 'fixed',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',

                        }}>
                            <Container>
                                <Row>
                                    <Col sm='12' md='4' className='px-4 px-md-0'>
                                        <h1 className='w-50 fw-bolder text-danger m-0 mb-5'>ABOUT ME</h1>
                                        <p className='text-white m-0 mb-4' style={{ textAlign: 'justify' }}>
                                            I'm not here to carry you to fitness, I'm here to motivate you to carry yourself to your goals.
                                        </p>
                                        <p className='text-white m-0 mb-5' style={{ textAlign: 'justify' }}>
                                            If you're not sure what your goals are, or don't know where to start on your fitness journey, come in and speak to me for help and develop a plan.
                                        </p>
                                        <Link to='/services'>
                                            <Button variant="outline-danger" className='rounded-pill mt-5 px-4'>Check My Services</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <section className='py-5 my-5'>
                            <Container>
                                <Row>
                                    <Col className='my-5 px-4 px-md-0'>
                                        <h1 className='text-uppercase text-center fw-bolder m-0 mb-5'>Why is exercise so important for seniors?</h1>
                                        <p style={{ textAlign: 'justify' }}>
                                            Whether you were once much more physically active or have never been one to exercise regularly, now is a great time to start an exercise and fitness regimen. Getting and staying in shape is just as important for seniors as it is for younger people.
                                            Why is exercise important for older people? Getting your heart rate up and challenging your muscles benefits virtually every system in your body and improves your physical and mental health in myriad ways. Physical activity helps maintain a healthy blood pressure, keeps harmful plaque from building up in your arteries, reduces inflammation, improves blood sugar levels, strengthens bones, and helps stave off depression.
                                        </p>
                                        <p style={{ textAlign: 'justify' }}>
                                            In addition, a regular exercise program can make your sex life better, lead to better quality sleep, reduce your risk of some cancers, and is linked to longer life. Many older adults hesitate to get moving because they're unfamiliar with the types of exercise and fitness that are effective and safe, and aren't sure how much exercise they need to do. The good news is that any kind of movement is better than being sedentary, so there's nothing wrong with starting small and working your way up to longer workouts. Your goal should be no less than 150 minutes of moderate intensity activity per week, but if you can't start at that level, work up to it (and then past it).
                                        </p>
                                        <p style={{ textAlign: 'justify' }} className='mb-5'>
                                            While there are many dedicated forms of exercise and fitness for adults, you also want to stay physically active throughout the day by taking the stairs, doing yard work, and playing with your grandkids. When it comes to exercise and fitness for seniors, most can begin without consulting a doctor—but there are exceptions. If you have a major health condition like diabetes, high blood pressure, heart or lung disease, osteoprosis or a neurological disease, definitely talk to your doctor first. People with mobility issues such as poor balance or arthritis should also get advice from their doctor.
                                        </p>
                                        <div className='text-center'>
                                            <Link to='/services'>
                                                <Button variant="danger" className='rounded-pill mt-5 px-4'>Start Exercise with My Services</Button>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Home