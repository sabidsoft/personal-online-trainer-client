import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsFacebook, BsTwitter, BsGithub, BsInstagram, BsStackOverflow } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <div className='bg-one py-5'>
                <Container>
                    <Row>
                        <Col sm='8' lg='6' className='mx-auto text-center py-5 px-5 px-md-0'>
                            <h1 className='text-danger m-0 mb-3'>Personal Fitness Trainer</h1>
                            <p className='text-muted m-0 mb-3'>Building muscle matters. In fact, your strength and muscle health are leading factors in longevity. Actively working to maintain and improve your balance and stability is incredibly important.</p>
                        </Col>
                    </Row>
                    <div className='text-center pb-5'>
                        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                            <BsFacebook size={20} color='#111' className='text-danger me-3' />
                        </a>
                        <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
                            <BsTwitter size={20} color='#111' className='text-danger me-3' />
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                            <BsInstagram size={20} color='#111' className='text-danger me-3' />
                        </a>
                        <a href='https://github.com/' target='_blank' rel='noreferrer'>
                            <BsGithub size={20} color='#111' className='text-danger me-3' />
                        </a>
                        <a href='https://stackoverflow.com/' target='_blank' rel='noreferrer'>
                            <BsStackOverflow size={20} color='#111' className='text-danger' />
                        </a>
                    </div>
                </Container>
            </div>
            <div className='bg-zero py-4 px-4 px-md-0'>
                <p className='text-muted text-center m-0'>&copy; Personal Fitness Trainer 2022 | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;